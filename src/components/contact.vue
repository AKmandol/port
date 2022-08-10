<!-- eslint-disable vue/multi-word-component-names -->
<template>

<section id='contact' class="py-5 text-center">
      <h5 class="text-light">Get In Touch</h5>
      <h2 class="hcolor mb-5">Contact Me</h2>
      <div class="container contact-container">
        <div class="contact-options">
              <article class="contact-option">
                <HiOutlineMail class='contact-icon'/>
                <h4> Email</h4>
                <h5 class="text-light" >amlankumar47@gmail.com</h5>
                <a target='_blank' href="mailto:amlankumar47@gmail.com">Send a Email</a>
              </article>
              <article class="contact-option">
                <RiMessengerLine class='contact-icon'/>
                <h4>Messenger</h4>
                <h5 class="text-light" >Amlan Kumar Mandol</h5>
                <a target='_blank' href="https://m.me/amlan.mandol">Send a Message</a>
              </article>
              <article class="contact-option">
                <BsWhatsapp class='contact-icon'/>
                <h4>WhatsApp</h4>
                <h5 class="text-light" >+8801733472747</h5>
                <a target='_blank' href="https://api.whatsapp.com/send?phone=+880173347247">Send a Message</a>
              </article>
        </div>

        <form>
         <input type="text" name='name' placeholder='Your Name' required/>
         <input type="email" name='email' placeholder='Your Email' required/>
         <input type="text" name='subject' placeholder='Email Subject (Optional)'/>
         <textarea name="msg" rows="13" placeholder='Your Message' required></textarea>
         <button type='submit' class='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>

</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact {
   background-color: #18183b;

}
.hcolor {
 color: #2fa6fc;
}

a {
  text-decoration: none;
}

.container.contact-container {
    width: 60%;
    display: grid;
    grid-template-columns: 35% 60%;
    gap: 5%;
}
.contact-options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}
.contact-option {
    background: #202046;
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);
}
.contact-option:hover {
    background: transparent;
    border-color: rgba(77,181,255,0.4);
}
.contact-icon {
    font-size: 1.8rem;
}
.contact-option h4 {
    font-size: .7rem;
    color: rgba(255, 255, 255, 0.733);
    margin-bottom: .5rem;
}
.contact-option a {
    font-size: .9rem;
    border: 1px solid rgba(255, 255, 255, 0.185);
    padding: .5rem;
    border-radius: .3rem; 
}
.contact-option a:hover {
    background: rgba(0, 0, 0, 0.521);
}
.contact-option h5 {
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
input, textarea {
    width: 100%;
    padding: 1rem;
    border-radius: .5rem;
    background: transparent;
    border: 2px solid rgba(77,181,255,0.4);
    resize: none;
    color: var(--color-white);
}

textarea {
  height: 100px;
}
::placeholder {
    color: aliceblue;
}


/*============= Medeia Query ==============*/
@media screen and (max-width: 1124px) {
    .container.contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    textarea {
        height: 10rem;
    }      
}
@media screen and (max-width: 600px) {
    .container.contact-container {
        width: var(--container-width-sm);
    }
}

</style>
