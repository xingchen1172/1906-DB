<?php
        public function mongo1(){
		                $host = '192.168.117.191';
				                $db = 'ln1906';

				                $tab = 'users';
						                echo __METHOD__;
						                $client = new Client("mongodb://{$host}:27017");

								                $collection = $client->$db->$tab;
								                $result = $collection->find()->toArray();
										                var_dump($result);
										        
										        }  
