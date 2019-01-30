import smtplib
from buytheway.decorators import data_required
from django.http import JsonResponse
from buytheway.settings_secret import GMAIL, GMAIL_PASSWORD
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


@data_required(['name', 'email', 'message'], 'GET')
def contact_submit(request):
    name = request.GET['name']
    email = request.GET['email']
    message = request.GET['message']

    from_email = email
    to_email = 'whey2ezenterprises@gmail.com'
    name = name
    # Create message container - the correct MIME type is multipart/alternative.
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Rise Up Gamers: Message from " + name
    msg['From'] = email
    msg['To'] = to_email

    text = "Name: " + name + "\n\n" + "Email: " + email + "\n\n" + "Message:" + '\n\n' + message

    html = """\
    <html>
      <head></head>
      <body>
        <div>
        <p>
            <b>Name:</b> """ + name + """<br><br>""" + """<b>Email:</b> """ + email + """<br><br>""" + """<b>Message:</b>""" + """<br><br>""" + message + """
        </p>
      </body>
    </html>
    """

    # Record the MIME types of both parts - text/plain and text/html.
    part1 = MIMEText(text, 'plain')
    part2 = MIMEText(html, 'html')
    msg.attach(part1)
    msg.attach(part2)

    # Send the message via local SMTP server.
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.ehlo()
    s.starttls()
    s.login(GMAIL, GMAIL_PASSWORD)

    # sendmail function takes 3 arguments: sender's address, recipient's address
    s.sendmail(from_email, to_email, msg.as_string())
    s.quit()

    return JsonResponse({'success': True}, safe=False)
