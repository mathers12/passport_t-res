/**
 * Created by ubuntu on 2/10/15.
 */


module.exports =
{
    SMTP:
    {
        user: "info@publishart.eu",
        pass: "publishart@2714info2517"
    },
    email:
    {
        from: "Live My Way Ltd. <info@publishart.eu>",
        subject: "Verifikacia e-mailu",
        footer: "dSoft Solutions s.r.o",
        html: {
            title: "Dobrý deň pán/pani",
            message: "Prosím potvrďte tento",
            subject: "verifikačný e-mail",
            button: "Potvrdiť kliknutím tu!"
        }
    },
    register:
    {
        approving: "<p>Registracia bola skoro dokoncena. Potvrdte verifikacny e-mail prosim.</p>",
        success: "<p>Registracia bola uspesne dokoncena, mozete sa prihlasit.</p>",
        existEmail: "Zadana e-mailova adresa uz existuje",
        matchPassword: "Nezhoduju sa Vam hesla"
    },
    login:
    {
        verifiedEmail: "E-malova adresa este nie je potvrdena, prosim potvrdte ju najskor",
            badUserOrPass: "Neplatne uzivatelske meno alebo heslo"
    }

};
