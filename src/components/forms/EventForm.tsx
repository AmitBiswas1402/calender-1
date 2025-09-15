import { useForm } from "react-hook-form"
import z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { eventFormSchema } from "@/schema/events"



const EventForm = () => {
    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: {
            isActive: true,         // matches schema
            durationInMinutes: 30,  // matches schema
        },
    })

    
  return (
    <div>
        
    </div>
  )
}
export default EventForm