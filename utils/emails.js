const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.API_KEY || "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"

sgMail.setApiKey(API_KEY);

exports.sentMail = async (email,subject,content)=>{
    const message = {
        to : email,
        from : {
                name: "Study Table",
                email:"mohitsolanki83974@gmail.com"
        },
        subject: subject,
        text : content    
    
    }
    sgMail.send(message).then(res=>console.log('sent email!!')).catch(e=>console.log(e.message));
}


