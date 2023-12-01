# Applicazione Backend API REST
Semplice backend API RESTful di esempio per la gestione della propria libreria personale, avente le seguenti funzionalità CRUD
<ul>
    <li>Autenticazione Utenti</li>
    <li>Aggiunta libro</li>
    <li>Modifica libro</li>
    <li>Rimuovere libro</li>
    <li>Numero di letture per libro</li>
</ul>

## Stack tecnologico
L'applicazione è scritta in TypeScript e utilizza il steguente stack:
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Sequelize come ORM</li>
</ul>

## Entità definite con i modelli dell'ORM

### Book
<ul>
    <li>id</li>
    <li>title</li>
    <li>author</li>
    <li>ISBN</li>
    <li>dateAdd</li>
    <li>dateRem</li>
    <li>plot</li>
    <li>readingsNumber</li>
    <li>userId</li>
</ul>

### User
<ul>
    <li>id</li>
    <li>name</li>
    <li>lastname</li>
    <li>password</li>
</ul>
