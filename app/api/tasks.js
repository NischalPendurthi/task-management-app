// pages/api/tasks.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GET(req, res) {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        assignedTo: {
          select: {username: true}
        }
      }
    })
    return new Response(JSON.stringify(tasks), { status: 200 })

  }
  catch (error) {
      return new Response(JSON.stringify("Failed to fetch the tasks"), { status: 500 })
}}

