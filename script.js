$(document).ready(function(){
    $("#register").validate({
        rules:{
            fname:{
                required:true,
                minlength:5
                
            },
            place:{
                required:true,
                
            },
            gender:{
                required:true
            },
            mail:{
                required:true,
                email:true
            },
            tel:{
                required:true,
                number:true
            },
            employment:{
                required:true
            },
            employmentStatus:{
                required:true
            },
            college:{
                required:true,
                
            },
            graduation:{
                required:true,
                number:true
            },
            tellUs:{
                required:true
            },
            whyDo:{
                required:true
            },
            whatMotivates:{
                required:true
            },
            whereDid:{
                required:true
            },
            cBox:{
                required:true
            }
        }
        
  })
  
})