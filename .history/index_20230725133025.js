import express from 'express'
import engine from 'express-handlebars'

let app = express()


const PORT = process.env.PORT || 3012


app.listen(PORT, function() {
    console.log('App has started')
})

app.engine(
    "handlebars",
    engine({
      layoutsDir: __dirname + "/views/layouts",
      defaultLayout: "main",
    })
  
  );
  app.set("view engine", "handlebars");