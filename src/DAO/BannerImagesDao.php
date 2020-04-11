<?php

namespace App\DAO;

use App\DataObject\BannerImages;
use Cake\Datasource\ConnectionManager;
use Cake\Log\Log;   


class BannerImagesDao {

    public function getBannerImagesByDisplayArea($displayArea){
        Log::debug('Started ...getBannerImagesByDisplayArea : Display Area : '.$displayArea);

        $conn = ConnectionManager::get('default');

        $sql="SELECT `banner_image_url`, `display_area`, `is_active`, `last_maint_ts`, `last_maint_id`, `opt_counter` FROM `banner_images`
              WHERE display_area = "."'".$displayArea."'".
              " AND is_active = 1";

        Log::debug("SQL : ".$sql);

        $stmt = $conn->execute($sql);
        $results = $stmt->fetchAll();

        $bannerImages= [];

        foreach($results as $result){
            $bannerImage = new BannerImages;
            $bannerImage->bannerImageUrl = $result[0];
            $bannerImage->displayArea = $result[1];
            $bannerImage->isActive = $result[2];
            $bannerImage->lastMaintTs  = $result[3];
            $bannerImage->lastMaintId = $result[4];
            $bannerImage->optCounter = $result[5];

            array_push($bannerImages,$bannerImage);
        }

        Log::debug('Ended ...getBannerImagesByDisplayArea');
        return $bannerImages;
    }


}