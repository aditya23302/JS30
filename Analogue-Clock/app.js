const hourHand=document.querySelector('.hour-hand');
const secHand=document.querySelector('.sec-hand');
const minHand=document.querySelector('.min-hand');

function setDate()
{
    const now=new Date();

    const seconds=now.getSeconds();
    const sDegree=((seconds/60)*360)+90;
    secHand.style.transform=`rotate(${sDegree}deg)`;

    const minutes=now.getMinutes();
    const mDegree=((minutes/60)*360)+((seconds/60)*6) + 90;
    minHand.style.transform=`rotate(${mDegree}deg)`;

     const hours=now.getHours();
     const hDegree=((hours/12)*360)+ ((minutes/60)*30) + 90;
     hourHand.style.transform=`rotate(${hDegree}deg)`;


}
setInterval(setDate,1000);
setDate();

