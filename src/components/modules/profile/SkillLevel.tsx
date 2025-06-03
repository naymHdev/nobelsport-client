import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function SkillLevel() {
  return (
    <div>
      <div className="space-y-4">
        <SkillRating sport="Football" rating={3} />
        <SkillRating sport="Basketball" rating={2} />
        <SkillRating sport="Tennis" rating={4} />
      </div>
    </div>
  );
}

function SkillRating({ sport, rating }: { sport: string; rating: number }) {
  return (
    <div className="flex items-center gap-3 md:gap-6 lg:gap-20">
      <span className="w-20 text-sm text-ns-foreground">{sport}</span>
      <div className="flex space-x-3 text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= rating ? (
            <AiFillStar key={star} className="w-8 h-8" />
          ) : (
            <AiOutlineStar key={star} className="w-8 h-8 text-gray-300" />
          )
        )}
      </div>
    </div>
  );
}
