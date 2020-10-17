<?php

class password {
    static function hash($password) {
        $tmp = password_hash(
            base64_encode(
                hash('sha256', $password, true)
            ),
            PASSWORD_DEFAULT
        );
        return $tmp;
    }
    
    static function verify($hash, $pass) {
        $tmp = password_verify(
            base64_encode(
                hash('sha256', $pass, true)
            ),
            $hash
        );
        return $tmp;
    }
}

