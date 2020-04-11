<?php

namespace App\DAO;

use Cake\Datasource\ConnectionManager;
use Cake\Log\Log;   

class NewsletterInfoDao {

    public function saveNewsletterInfo($newsletterInfo){

        Log::debug('Started ...saveNewsletterInfo : '.$newsletterInfo);

        $conn = ConnectionManager::get('default');

        $sql=" INSERT INTO newsletter_info(newsletter_email, last_maint_ts, last_maint_id, opt_counter) 
         values ("."'".$newsletterInfo->newsletterEmail."',".
         "CURRENT_TIMESTAMP, 'paperdocks-ws',0 ";

        Log::debug('SQL : '.$sql);

        $stmt = $conn->execute($sql);
        
        Log::debug('Ended ...saveNewsletterInfo');
    }
}