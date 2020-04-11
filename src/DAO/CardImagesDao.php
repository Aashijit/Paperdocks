<?php

namespace App\DAO;

use App\DataObject\CardImages;
use Cake\Datasource\ConnectionManager;
use Cake\Log\Log;   


class CardImagesDao {

    public function getCardImagesByCardId($cardId){

        Log::debug('Started ...getCardImagesByCardId, Card Id : '.$cardId);

        $conn = ConnectionManager::get('default');

        $sql="SELECT `CARD_ID`, `IMAGE_URL`, `LAST_MAINT_TS`, `LAST_MAINT_ID`, `OPT_COUNTER` FROM `card_images` WHERE 
            CARD_ID = '".$cardId."'";
        
        Log::debug("SQL : ".$sql);

        $stmt = $conn->execute($sql);
        $results = $stmt->fetchAll();

        $cardImages = [];

        foreach($results as $result){
            $cardImage = new CardImages;
            $cardImage->cardId = $result[0];
            $cardImage->imageUrl = $result[1];
            $cardImage->lastMaintId = $result[2];
            $cardImage->lastMaintTs = $result[3];
            $cardImage->optCounter = $result[4];
            array_push($cardImages, $cardImage);
        }

        Log::debug('Ended ...getCardImagesByCardId');
        return $cardImages;
    }
}