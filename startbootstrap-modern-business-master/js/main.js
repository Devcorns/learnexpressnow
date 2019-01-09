
/**
 * this is main js by:-
 * author  : Prakhar Mathur
 * Company : Devcorns Innovation
 * Contact : +91-9716273125
 **/

window.onload = initialized;
 
function initialized() {

    document.body.classList.remove("d-none");


}
 
const navmenu = document.querySelectorAll(".nav-item .nav-link");

/**
 * this is used to apply active functionality on main nav
 */
for(let i = 0;i<navmenu.length;i++) {
    navmenu[i].addEventListener("click",e=> {
        if(e.target.classList.contains('active')) {
            
        }  else {
            for(let j = 0; j<navmenu.length;j++){
                    navmenu[j].classList.remove("active");
                }
                e.target.classList.add("active");
            }
        })
    }



