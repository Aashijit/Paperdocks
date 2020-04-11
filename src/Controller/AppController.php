<?php

namespace App\Controller;

use App\DAO\CardBookInfoDao;
use App\DAO\CardInfoDao;
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


        $cardInfoDao = new CardInfoDao;
            
        $cardInfos = $cardInfoDao->getCardInfos();

        Log::debug($cardInfos);

    }
}
