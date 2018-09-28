<?php
        $palabra = $_POST['words'];;
        $vector_palabra = str_split($palabra);

        for ($i=0; $i < count($vector_palabra); $i++) {

            switch(strtolower($vector_palabra[$i])) {
                case "m": $vector_palabra[$i] = "6"; break;
                case "u": $vector_palabra[$i] = "7"; break;
                case "r": $vector_palabra[$i] = "8"; break;
                case "c": $vector_palabra[$i] = "9"; break;
                case "i": $vector_palabra[$i] = "0"; break;
                case "e": $vector_palabra[$i] = "1"; break;
                case "l": $vector_palabra[$i] = "2"; break;
                case "a": $vector_palabra[$i] = "3"; break;
                case "g": $vector_palabra[$i] = "4"; break;
                case "o": $vector_palabra[$i] = "5"; break;
                case " ": $vector_palabra[$i] = "*"; break;
            }
        }

        $word_crypted = implode($vector_palabra);

        echo $word_crypted;