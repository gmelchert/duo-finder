import express from "express";
import { PrismaClient } from "@prisma/client";
import { convertHourToMinutes, convertMinutesToHours } from "./utils";
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*",
}))

const prisma = new PrismaClient()

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })
    
    return res.json(games)
})

app.post('/ads/:id', async (req, res) => {
    const {body} = req
    const gameId = req.params.id

    const ad = await prisma.ad.create({
        data: {
            ...body,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourToMinutes(body.hourStart),
            hourEnd: convertHourToMinutes(body.hourEnd),
            gameId
        }
    })

    return res.status(201).send(ad)
    
})

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })

    return res.json({
        discord: ad.discord
    })
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourEnd: true,
            hourStart: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    res.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourEnd: convertMinutesToHours(ad.hourEnd),
            hourStart: convertMinutesToHours(ad.hourStart),
        }
    }))
})

app.listen(3333)
console.log('ok')