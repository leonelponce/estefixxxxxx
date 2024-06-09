function showEnvelopes() {
    document.getElementById('envelopes').style.display = 'flex';
}

function openEnvelope(type) {
    const envelopeContent = {
        triste: `
            <h2>Cuando estés triste</h2>
            <p>Amor, entinedo que hay momentos en los que te sentis abrumada por la tristeza. Quiero que sepas que siempre voy a estar acá a tu lado, dispuesto a escucharte, a sostener tu mano cuando te sientas perdida. Nunca estás sola en esto, siempre vas a contar conmigo para compartir tus alegrías y aliviar tus penas. Mi amor por vos es incondicional y eterno, y cada día estoy más comprometido a caminar junto a vos, enfrentando juntos cada desafío que la vida nos presente. Te amo con todo mi ser, y siempre voy a estar para vos, sin importar qué. Si leiste esta cartita, te debo un chocolatito.</p>
            <p>Con todo mi amor, Leo.</p>
        `,
        abrazo: `
            <h2>Cuando necesites un abrazo</h2>
            <p>Mi amor, quiero que sepas que en esos momentos en los que sintas la necesidad de un abrazo reconfortante, cerrá tus ojos y sentí mis brazos rodeándote con todo el amor y la ternura que siento por vos. Imagina que estoy justo con vos, listo para envolverte en un abrazo cálido que te haga sentir segura y amada. Aunque la distancia física pueda separarnos en ocasiones, quiero que siempre sientas mi presencia en tu corazón, acompañándote en cada momento del día. Siempre estoy acá para vos, dispuesto a ofrecerte consuelo, apoyo y todo el cariño que mereces. Si leiste esta cartita, te debo un abracito.</p>
            <p>Con todo mi cariño, Leo.</p>
        `,
        feliz: `
            <h2>Cuando estés feliz</h2>
            <p>¡Mi amor! No sabes cuánto me llena de alegría verte feliz. Cada sonrisa tuya  me hace sentir increíblemente afortunado de tenerte conmigo. Tu felicidad es mi mayor tesoro, y saber que soy parte de ella me llena de felicidad. Quiero que disfrutes cada momento al máximo, celebrando con vos cada logro, cada alegría y cada sueño cumplido. Tu felicidad es mi prioridad, y voy a hacer todo lo posible para cumplirlo, para verte sonreír cada día más radiante. Sos mi fuente de inspiración, mi razón para creer en lo bueno de la vida, y estoy eternamente agradecido por tenerte a mi lado. Que esta felicidad que compartimos nos acompañe siempre en nuestro camino juntos. Siempre voy a estar acá para compartir cada alegría con mi amorcito leeendo. Si leiste esto me debes una fotoculo.</p>
            <p>Te amo, Leo.</p>
        `,
        sola: `
            <h2>Cuando te sientas sola</h2>
            <p>Amor, entiendo que a veces te sentis sola. Quiero que sepas que siempre estoy aca con vos, incluso si no estoy físicamente presente. Siempre contás con mi amor y mi apoyo incondicional. Perdón si no estoy para hacerte sentir mejor. Si leiste esta cartita escrbime que te voy a hacer sentir acompañada.</p>
            <p>Con todo mi amor, Leo.</p>
        `,
        aniversario: `
            <h2>¡Feliz 17 meses!</h2>
            <p>¡Feliz 17 meses, amor mío! Cada vez falta menos para cumplir DOS AÑOS amoooor,fuaaa. Esta es una notita chiquitita para felicitarnos a ambos por llegar tan lejos, te amo una BANDAAA. De verdad que te quiero un montón y perdoname si no estoy muy cariñoso con vos, voy a tratar de mejorar o volver a estar al 100% para vos, besos.</p>
            <p>Con amor, Leo.</p>
        `
    };

    document.getElementById('envelope-content').innerHTML = envelopeContent[type] + '<br><button class="close-button" onclick="closeEnvelope()">Cerrar</button>';
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function closeEnvelope() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('envelopes').style.display = 'flex';
}
