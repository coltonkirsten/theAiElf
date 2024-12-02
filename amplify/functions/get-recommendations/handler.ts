import type { Schema } from "../../data/resource"
import OpenAI from "/opt/nodejs/node_modules/openai"

const openai = new OpenAI()

export const handler: Schema["getrec"]["functionHandler"] = async (event) => {
    try {
        // Get the name from arguments instead of parsing event body
        const { name } = event.arguments

        // Create a chat completion with the OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: `Generate a personalized recommendation for ${name}` },
            ],
        })

        // Extract the assistant's response
        const assistantReply = completion.choices[0].message

        // Return the response directly (no need for statusCode as this is AppSync)
        return assistantReply.content

    } catch (error: any) {
        console.error("Error:", error)
        throw new Error(`Failed to get recommendation: ${error.message}`)
    }
}