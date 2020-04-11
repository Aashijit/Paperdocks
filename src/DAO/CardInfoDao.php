<?php

namespace App\DAO;

use App\DataObject\CardInfo;
use Cake\Datasource\ConnectionManager;
use Cake\Log\Log;   

class CardInfoDao {

    public function getCardInfos(){

        Log::debug('Started ...getCardInfo');

        $conn = ConnectionManager::get('default');

        $sql="SELECT `CARD_ID`, `CARD_NAME`, `CARD_DISPLAY_NAME`, `CARD_TAGLINE_TEXT`, 
        `CARD_DESCRIPTION_TEXT`, `CARD_PRIMARY_DIMENSIONS`, `CARD_PRIMARY_PRICE`, 
        `CARD_MATERIAL`, `CARD_AVAILABLITY`, `NUMBER_OF_CARDS_AVAILABLE`, 
        `LAST_MAINT_ID`, `LAST_MAINT_TS`, `OPTCOUNTER` FROM `card_info`";

        Log::debug('SQL : '.$sql);

        $stmt = $conn->execute($sql);
        $results = $stmt->fetchAll();

        $cardInfos = [];

        foreach($results as $result){
            $cardInfo = new CardInfo;
            $cardInfo->cardId = $result[0];
            $cardInfo->cardName = $result[1];
            $cardInfo->cardDisplayName = $result[2];
            $cardInfo->cardTaglineText = $result[3];
            $cardInfo->cardDescriptionText = $result[4];
            $cardInfo->cardPrimaryDimensions = $result[5];
            $cardInfo->cardPrimaryPrice = $result[6];
            $cardInfo->cardMaterial = $result[7];
            $cardInfo->cardAvailability = $result[8];
            $cardInfo->numberOfCardsAvailable = $result[9];
            $cardInfo->lastMaintId = $result[10];
            $cardInfo->lastMaintTs = $result[11];
            $cardInfo->optCounter = $result[12];

            array_push($cardInfos,$cardInfo);
        }

        Log::debug('Ended ...getCardInfo');
        return $cardInfos;
    }
}