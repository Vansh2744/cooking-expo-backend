CREATE TABLE "favourites" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"receipe_id" integer NOT NULL,
	"title" text NOT NULL,
	"image" text,
	"cook_time" text,
	"serving" text,
	"created_at" timestamp DEFAULT now()
);
