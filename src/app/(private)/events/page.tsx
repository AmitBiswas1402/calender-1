import { Button } from "@/components/ui/button";
import { db } from "@/drizzle/db";
import { auth } from "@clerk/nextjs/server";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";

const EventsPage = async() => {
  const {userId, redirectToSignIn} = await auth();

  if (userId == null) {
    return redirectToSignIn;
  }

  const events = await db.query.EventTable.findMany({
    where: ({
      clerkUserId
    }, {eq}) => eq(clerkUserId, userId)
  })
  return (
    <>
      <div className="flex gap-4 items-baseline">
        <h1 className="text-3xl lg:text-3xl xl:text-4xl font-semibold mb-6">
        Events
      </h1>
      <Button asChild>
        <Link href="/events/new">
          <CalendarPlus className="mr-1 size-6" /> New Event
        </Link>
      </Button>
      </div>
    </>
  );
};
export default EventsPage;
