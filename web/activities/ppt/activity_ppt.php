<?php

require_once 'dao/ppt_activity_dao.php';

use Biz\Activity\Config\Activity;
use ppt\dao\ppt_activity_dao;
use AppBundle\Common\ArrayToolkit;

class activity_ppt extends Activity
{
    protected function registerListeners()
    {
    }

    public function isFinished($activityId)
    {
        $activity = $this->getActivityService()->getActivity($activityId);
        $ppt = $this->getPptActivityDao()->get($activity['mediaId']);

        if ('time' === $ppt['finishType']) {
            $result = $this->getTaskResultService()->getMyLearnedTimeByActivityId($activityId);
            $result /= 60;

            return !empty($result) && $result >= $ppt['finishDetail'];
        }

        if ('end' === $ppt['finishType']) {
            $log = $this->getActivityLearnLogService()->getMyRecentFinishLogByActivityId($activityId);

            return !empty($log);
        }

        return false;
    }

    public function create($fields)
    {
        if (empty($fields['media'])) {
            throw $this->createInvalidArgumentException('参数不正确');
        }
        $media = json_decode($fields['media'], true);

        if (empty($media['id'])) {
            throw $this->createInvalidArgumentException('参数不正确');
        }
        $fields['mediaId'] = $media['id'];

        $default = array(
            'finishDetail' => 1,
            'finishType' => 'end',
        );
        $fields = array_merge($default, $fields);

        $ppt = ArrayToolkit::parts($fields, array(
            'mediaId',
            'finishType',
            'finishDetail',
        ));

        $biz = $this->getBiz();
        $ppt['createdUserId'] = $biz['user']['id'];
        $ppt['createdTime'] = time();

        $ppt = $this->getPptActivityDao()->create($ppt);

        return $ppt;
    }

    public function copy($activity, $config = array())
    {
        $biz = $this->getBiz();
        $ppt = $this->getPptActivityDao()->get($activity['mediaId']);
        $newPpt = array(
            'mediaId' => $ppt['mediaId'],
            'finishType' => $ppt['finishType'],
            'finishDetail' => $ppt['finishDetail'],
            'createdUserId' => $biz['user']['id'],
        );

        return $this->getPptActivityDao()->create($newPpt);
    }

    public function sync($sourceActivity, $activity)
    {
        $sourcePpt = $this->getPptActivityDao()->get($sourceActivity['mediaId']);
        $ppt = $this->getPptActivityDao()->get($activity['mediaId']);
        $ppt['mediaId'] = $sourcePpt['mediaId'];
        $ppt['finishType'] = $sourcePpt['finishType'];
        $ppt['finishDetail'] = $sourcePpt['finishDetail'];

        return $this->getPptActivityDao()->update($ppt['id'], $ppt);
    }

    public function update($targetId, &$fields, $activity)
    {
        if (empty($fields['media'])) {
            throw $this->createInvalidArgumentException('参数不正确');
        }
        $media = json_decode($fields['media'], true);

        if (empty($media['id'])) {
            throw $this->createInvalidArgumentException('参数不正确');
        }
        $fields['mediaId'] = $media['id'];

        $updateFields = ArrayToolkit::parts($fields, array(
            'mediaId',
            'finishType',
            'finishDetail',
        ));

        $updateFields['updatedTime'] = time();

        return $this->getPptActivityDao()->update($targetId, $updateFields);
    }

    public function delete($targetId)
    {
        return $this->getPptActivityDao()->delete($targetId);
    }

    public function get($targetId)
    {
        $activity = $this->getPptActivityDao()->get($targetId);
        $activity['file'] = $this->getUploadFileService()->getFullFile($activity['mediaId']);

        return $activity;
    }

    public function find($targetIds, $showCloud = 1)
    {
        return $this->getPptActivityDao()->findByIds($targetIds);
    }

    public function materialSupported()
    {
        return true;
    }

    /**
     * @return PptActivityDao
     */
    protected function getPptActivityDao()
    {
        return $this->createDao(new ppt_activity_dao($this->getBiz()));
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->getBiz()->service('Activity:ActivityService');
    }

    /**
     * @return \Biz\File\Service\UploadFileService
     */
    protected function getUploadFileService()
    {
        return $this->getBiz()->service('File:UploadFileService');
    }
}
