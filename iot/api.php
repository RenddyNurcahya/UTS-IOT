<?php
header('Content-Type: application/json');

$response = [
    "status" => "success",
    "data" => [
    "suhumax" => 36,
    "suhumin" => 23,
    "suhurata" => 28.35,
    "nilai_suhu_max_humid_max" => [
        [
            "idx" => 101,
            "suhun" => 36,
            "humid" => 36,
            "kecerahan" => 25,
            "timestamp" => "2010-09-18 07:23:48",
        ],
        [
            "idx" => 226,
            "suhun" => 36,
            "humid" => 36,
            "kecerahan" => 27,
            "timestamp" => "2011-05-02 12:29:34",
        ]
    ],
    "month_year_max" => [
        [
            "month_year" => "9-2010",
        ],
        [
            "month_year" => "5-2011",
        ]
     ]
    ]
];

echo json_encode($response);
?>