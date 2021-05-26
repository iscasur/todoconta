import React from "react";

function AdsTodoconta() {
    const ads = [
        {
            name: "XMLSAT Premium",
            description:
                "Administración Masiva de archivos XML – Herramienta para la Contabilidad Electrónica.",
            url: "https://todoconta.com/xmlsatpremium",
        },
        {
            name: "ConciliaREP",
            description:
                "Concilia en Excel los CFDI de complementos de pago vs CFDI de facturas de forma práctica.",
            url: "https://todoconta.com/conciliarep",
        },
        {
            name: "Control XML Nómina",
            description:
                "Exporta a Excel los datos generales de todos tus comprobantes fiscales (XML) de nómina de forma ágil, rápida y sencilla.",
            url: "https://todoconta.com/controlxmlnom",
        },
        {
            name: "Control XML-CFDI",
            description:
                "Exporta a Excel los datos generales de todos tus comprobantes fiscales (XML) de forma ágil, rápida y sencilla.",
            url: "https://todoconta.com/controlxml",
        },
        {
            name: "XML a CTPQi",
            description:
                "Contabiliza todos tus archivos XML y genera pólizas listas para ser importadas Contpaq i® Contabilidad.",
            url: "https://todoconta.com/xmlcontpaqi",
        },
    ];

    const randomNumber = Math.floor(Math.random() * ads.length);

    return (
        <>
            <section className="adBar">
                <a href={ads[randomNumber].url} target="_blank">
                    <div>
                        ✨ {ads[randomNumber].description}{" "}
                        <strong>Mas información</strong>
                    </div>
                </a>
            </section>
        </>
    );
}

export default AdsTodoconta;
