<?php

namespace App\Controller;

use App\DAO\CardBookInfoDao;
use Cake\Controller\Controller;
use Cake\Event\Event;
use Cake\Log\Log;


class AppController extends Controller
{

    public function initialize()
    {
        parent::initialize();

        $this->loadComponent('RequestHandler', [
            'enableBeforeRedirect' => false,
        ]);
        $this->loadComponent('Flash');


        $cardBookInfoDao = new CardBookInfoDao;

        $cardBookInfos= $cardBookInfoDao->getCardBookInfosByCardBookId(1);

        $this->set('cardBookInfos',$cardBookInfos);

        Log::debug($cardBookInfos);
    }
}
