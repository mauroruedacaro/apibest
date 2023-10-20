// routes/ticket.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Calcular subtotal, IVA y total de un ticket
router.get('/ticket/:id', async (req, res) => {
    const { id } = req.params;
    const ticketItems = await TicketItems.get(id);
    
    // Calcular subtotal, IVA y total
    let subtotal = 0;
    ticketItems.forEach((item) => {
        subtotal += item.price;
    });
    
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    
    res.json({ subtotal, iva, total });
    });

module.exports = router;
