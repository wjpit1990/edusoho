<?php

namespace ApiBundle\Api\Resource\Coupon;

use ApiBundle\Api\Resource\Filter;
use ApiBundle\Api\Resource\CourseSet\CourseSetFilter;
use ApiBundle\Api\Resource\Classroom\ClassroomFilter;

class CouponFilter extends Filter
{
    protected $publicFields = array(
        'id', 'code', 'type', 'status', 'rate', 'userId', 'deadline', 'targetType', 'targetId', 'target',
    );

    protected function publicFields(&$data)
    {
        $data['deadline'] = date('c', $data['deadline']);

        if (in_array($data['targetType'], array('course', 'classroom')) && !empty($data['target'])) {
            $targetFilter = $this->getFilter($data['targetType']);
            $targetFilter->setMode(Filter::SIMPLE_MODE);
            $targetFilter->filter($data['target']);
        }
        isset($data['target']) && is_array($data['target']) ? $data['targetId'] = $data['target']['id'] : $data['target'] = null;
    }

    protected function getFilter($type)
    {
        $filters = array(
            'course' => new CourseSetFilter(),
            'classroom' => new ClassroomFilter(),
        );

        return $filters[$type];
    }
}
