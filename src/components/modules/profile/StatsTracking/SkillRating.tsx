import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function SkillRating() {
  return (
    <div>
      <div className="space-y-4">
        <Rating sport="Speed" rating={3} />
        <Rating sport="Technical" rating={4} />
        <Rating sport="Finishing" rating={5} />
        <Rating sport="Defending" rating={6} />
      </div>
    </div>
  );
}

function Rating({ sport, rating }: { sport: string; rating: number }) {
  return (
    <div className="flex items-center gap-3 md:gap-6 lg:gap-20">
      <span className="w-20 text-sm text-ns-foreground">{sport}</span>
      <div className="flex md:space-x-3 text-yellow-400">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) =>
          star <= rating ? (
            <AiFillStar key={star} className="lg:w-8 lg:h-8" />
          ) : (
            <AiOutlineStar key={star} className="lg:w-8 lg:h-8 text-gray-300" />
          )
        )}
      </div>
    </div>
  );
}
