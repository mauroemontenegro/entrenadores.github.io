import  express  from "express";
import cors from "cors"


// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-2039918141986399-120721-11ed9f5ef1c9ebd8cd43e4dc1130ca57-447361793' });

const app= express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) =>{
    res.send("soy el server")
});

app.post("/create_preference", async (req,res) => {
    try{
        const body ={
            items:[
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id:"ARS",
                },
            ],
            back_urls:{
                success:"https://www.youtube.com",
                failure:"https://www.youtube.com",
                pending:"https://www.youtube.com"
            },
            auto_return:"approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: "Error al crear preference"
        });
    }
});

app.listen(port, ()=>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
});


// arreglar el detalle del producto(al recargar)
// antes de comprar tengan una cuenta
// Agregar localStorage y mejorar la estetica del carrito y hacerlo responsive