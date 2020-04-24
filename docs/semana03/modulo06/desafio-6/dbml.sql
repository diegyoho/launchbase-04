CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "address_id" int NOT NULL,
  "name" text NOT NULL,
  "phone" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text NOT NULL,
  "number" text NOT NULL,
  "neighborhood" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int NOT NULL,
  "color" text NOT NULL,
  "license_plate" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text NOT NULL,
  "model" text NOT NULL,
  "year" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "price" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "car_order" (
  "id" SERIAL PRIMARY KEY,
  "car_id" int NOT NULL,
  "order_id" int NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("address_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");
