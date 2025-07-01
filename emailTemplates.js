// Two modern email templates for portfolio visitor and owner

function visitorTemplate({ subject, body, name, phone, to }) {
    return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;padding:36px 28px;background:linear-gradient(135deg,#18181b 70%,#444 100%);color:#f1f1f1;max-width:600px;margin:auto;border-radius:18px;box-shadow:0 4px 24px #0005;overflow:hidden;">
      <div style="text-align:center;margin-bottom:28px;">
        <img src='https://ik.imagekit.io/rh19kamog/hello2.gif?updatedAt=1749465342831' alt='Welcome' style='width:100px;height:100px;border-radius:50%;box-shadow:0 2px 8px #222;margin-bottom:14px;border:4px solid #fff;background:#222;'>
        <h2 style="color:#fff;margin-bottom:8px;font-size:2.1em;letter-spacing:1px;">${subject || 'Thanks for Visiting My Portfolio!'}</h2>
    </div>

        <p style="font-size:1.18em;line-height:1.7;color:#fff;background:rgba(255,255,255,0.04);padding:20px 26px;border-radius:10px;box-shadow:0 1px 4px #0002;">
          ${`Hi ${name}!<br>
          Thank you for visiting my portfolio.
          I hope you enjoyed exploring my work and projects.<br>If you have any questions, feedback,
          or collaboration ideas, feel free to reply to this email or connect with me on my social channels.
          <br><br>Have a great day! <br>
          Name: Satish Parmar <br>
          Phone: +91 9785470525 <br>
          Email: satishparmarparmar486@gmail.com <br>
          LinkedIn: https://www.linkedin.com/in/satish-parmar-ak978312 <br>
          GitHub: https://github.com/SatishParmar1
          `}
        </p>


      <div style="margin:36px 0 0 0;text-align:center;">
        <span style="display:inline-block;padding:12px 28px;background:linear-gradient(90deg,#222,#555);color:#fff;border-radius:24px;font-weight:bold;box-shadow:0 2px 8px #0004;animation:glow 1.5s infinite alternate;letter-spacing:1px;">
        ✨ Visit Portfolio ✨</span>
      </div>

      <hr style="margin:25px 0;border:none;border-top:1px solid #333;">
      <footer style="font-size:0.97em;color:#888;text-align:center;">Sent by <b>Satish Parmar</b></footer>
      <style>@keyframes glow { from { box-shadow:0 2px 8px #0004; } to { box-shadow:0 2px 24px #fff2; } }</style>
    </div>
  `;
}


{/* <p style="font-size:1.18em;line-height:1.7;color:#fff;background:rgba(255,255,255,0.04);padding:20px 26px;border-radius:10px;box-shadow:0 1px 4px #0002;">
       ${`Contact: +91 9785470525<br>
       Email: satishparmarparmar486@gmail.com`}
      </p> */}
//   <div style="background:rgba(255,255,255,0.06);padding:18px 22px;border-radius:12px;margin-bottom:18px;box-shadow:0 1px 4px #0002;">
//         <p style="margin:0 0 8px 0;font-size:1.1em;"><b>Name:</b> <span style='color:#0871C8FF;'>${name || 'Visitor'}</span></p>
//         <p style="margin:0 0 8px 0;font-size:1.1em;"><b>Email:</b> <span style='color:#0871C8FF;'>${to || '-'}</span></p>
//         <p style="margin:0 0 8px 0;font-size:1.1em;"><b>Phone:</b> <span style='color:#0871C8FF;'>${phone || '-'}</span></p>
//       </div>

function ownerTemplate({ subject, body, visitorEmail, name, phone, email }) {
    return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;padding:36px 28px;background:linear-gradient(135deg,#18181b 70%,#444 100%);color:#222;max-width:600px;margin:auto;border-radius:18px;box-shadow:0 4px 24px #bbb5;overflow:hidden;">
      <div style="text-align:center;margin-bottom:28px;">
        <img src='https://ik.imagekit.io/rh19kamog/hello2.gif?updatedAt=1749465342831' alt='Portfolio Visit' style='width:100px;height:100px;border-radius:50%;box-shadow:0 2px 8px #bbb;margin-bottom:14px;border:4px solid #fff;background:#eee;'>
        <h2 style="color:#fff;margin-bottom:8px;font-size:2.1em;letter-spacing:1px;">${subject || 'New Portfolio Visitor!'}</h2>
      </div>
      
      <div style="background:rgba(255,255,255,0.06);padding:18px 22px;border-radius:12px;margin-bottom:18px;box-shadow:0 1px 4px #0002;">
        <p style="margin:0 0 8px 0;color:#fff; font-size:1.1em;"><b>Name:</b> <span style='color:#0871C8FF;'>${name || 'Visitor Name'}</span></p>
        <p style="margin:0 0 8px 0;color:#fff; font-size:1.1em;"><b>Email:</b> <span style='color:#0871C8FF;'>${visitorEmail || 'Visitor Email'}</span></p>
        <p style="margin:0 0 8px 0;color:#fff; font-size:1.1em;"><b>Phone:</b> <span style='color:#0871C8FF;'>${phone || 'Visitor Number'}</span></p>
      </div>
      
      <p style="font-size:1.18em;line-height:1.7;color:#fff;background:rgba(255,255,255,0.04);padding:20px 26px;border-radius:10px;box-shadow:0 1px 4px #0002;">
       '${body}'
      </p>
      
      <div style="margin:36px 0 0 0;text-align:center;">
        <span style="display:inline-block;padding:12px 28px;background:linear-gradient(90deg,#fff,#bbb);color:#18181b;border-radius:24px;font-weight:bold;box-shadow:0 2px 8px #bbb4;animation:glow 1.5s infinite alternate;letter-spacing:1px;">Portfolio Notification 📬</span>
      </div>
      <hr style="margin:36px 0;border:none;border-top:1px solid #eee;">
      <footer style="font-size:0.97em;color:#888;text-align:center;">Sent via <b>Portfolio Backend</b> <span style="font-size:1.2em;">🤍</span></footer>
      <style>@keyframes glow { from { box-shadow:0 2px 8px #bbb4; } to { box-shadow:0 2px 24px #fff2; } }</style>
    </div>
  `;
}

module.exports = { visitorTemplate, ownerTemplate };


// <p style="font-size:1.18em;line-height:1.7;background:rgba(0,0,0,0.04);color:#fff padding:20px 26px;border-radius:10px;box-shadow:0 1px 4px #bbb2;">
//         ${body`}
//       </p>