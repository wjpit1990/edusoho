<?php

namespace AppBundle\Controller\Cashier;

use AppBundle\Controller\BaseController;
use Biz\OrderFacade\Currency;
use Biz\OrderFacade\Product\Product;
use Biz\System\Service\SettingService;
use Codeages\Biz\Framework\Order\Service\OrderService;
use Codeages\Biz\Framework\Pay\Service\AccountService;
use Codeages\Biz\Framework\Pay\Service\PayService;
use Symfony\Component\HttpFoundation\Response;

class CoinController extends BaseController
{
    public function showAction($order)
    {
        $coinSetting = $this->getSettingService()->get('coin');

        if (!$coinSetting['coin_enabled']) {
            return new Response('');
        }

        $user = $this->getUser();
        $balance = $this->getAccountService()->getUserBalanceByUserId($user->getId());
        return $this->render('cashier/coin/show.html.twig', array(
            'coinSetting' => $coinSetting,
            'balance' => $balance,
            'maxCoin' => $this->getMaxCoin($order),
            'isPasswordSet' => $this->getAccountService()->isPayPasswordSetted($user->getId()),
        ));
    }

    private function getMaxCoin($order)
    {
        $orderItems = $this->getOrderService()->findOrderItemsByOrderId($order['id']);

        $item = reset($orderItems);

        $biz = $this->getBiz();

        /* @var $product Product */
        //todo 命名问题
        $product = $biz['order.product.'.$item['target_type']];

        $product->init(array('targetId' => $item['target_id']));

        return $this->getCurrency()->convertToCoin($order['pay_amount'] * $product->maxRate / 100);
    }

    /**
     * @return Currency
     */
    private function getCurrency()
    {
        $biz = $this->getBiz();
        return $biz['currency'];
    }

    /**
     * @return AccountService
     */
    private function getAccountService()
    {
        return $this->createService('Pay:AccountService');
    }

    /**
     * @return SettingService
     */
    private function getSettingService()
    {
        return $this->createService('System:SettingService');
    }

    /**
     * @return PayService
     */
    private function getPayService()
    {
        return $this->createService('Pay:PayService');
    }

    /**
     * @return OrderService
     */
    private function getOrderService()
    {
        return $this->createService('Order:OrderService');
    }
}
