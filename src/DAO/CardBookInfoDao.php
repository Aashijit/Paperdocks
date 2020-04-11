<?php

namespace App\DAO;

use App\DataObject\CardBookInfo;
use Cake\Datasource\ConnectionManager;
use Cake\Log\Log;   

class CardBookInfoDao {

    
    public function getCardBookInfos(){

        Log::debug('Started ...getCardBookInfosByCardBookId');

        $conn = ConnectionManager::get('default');

        $sql="SELECT `CARD_ID`, `TAG_ID`, `OCCASSION_ID`, `CATEGORY_ID`, `IS_PRESENT`, `LAST_MAINT_ID`, `LAST_MAINT_TS`, `OPTCOUNTER` FROM `card_book_info`";

        Log::debug('SQL : '.$sql);
        
        $stmt = $conn->execute($sql);
        $results = $stmt->fetchAll();



        $cardBookInfos = [];

        foreach($results as $result){
            $cardBookInfo = new CardBookInfo;    
            $cardBookInfo->cardId = $result[0];
            $cardBookInfo->tagId = $result[1];
            $cardBookInfo->occassionId = $result[2];
            $cardBookInfo->categoryId = $result[3];
            $cardBookInfo->isPresent = $result[4];
            $cardBookInfo->lastMaintTs = $result[5];
            $cardBookInfo->lastMaintId = $result[6];
            $cardBookInfo->optCounter = $result[7];
            
            array_push($cardBookInfos,$cardBookInfo);
        }

        Log::debug('Ended  ... getCardBookInfosByCardBookId');

        return $cardBookInfos;
    }


}