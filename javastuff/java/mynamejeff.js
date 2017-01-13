isOn = new Boolean(false);
document.getElementById('buttonxd').onclick = function(){die()};
object = document.getElementById('imgmeme');
function die(){
	if(isOn){
		object.src = '../assets/off.jpg';
		isOn = false;
		console.log('off');
	}
	else{
		object.src = '../assets/on.jpg';
		isOn = true;
		console.log('on');
	}
}