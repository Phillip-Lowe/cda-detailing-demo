-- Fix permissions for systack user
GRANT CREATE ON SCHEMA public TO systack;
GRANT ALL ON SCHEMA public TO systack;

-- Create CDA bookings table
CREATE TABLE IF NOT EXISTS cda_bookings (
    id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT NOT NULL,
    service_id TEXT,
    vehicle_size TEXT,
    vehicle_info TEXT,
    appointment_time TIMESTAMPTZ NOT NULL,
    appointment_date DATE GENERATED ALWAYS AS (DATE(appointment_time)) STORED,
    appointment_time_only TIME GENERATED ALWAYS AS (CAST(appointment_time AS TIME)) STORED,
    address TEXT,
    base_price_cents INTEGER DEFAULT 0,
    addons_cents INTEGER DEFAULT 0,
    tax_cents INTEGER DEFAULT 0,
    total_cents INTEGER DEFAULT 0,
    addons TEXT,
    notes TEXT,
    status TEXT DEFAULT 'booked',
    confirmed BOOLEAN DEFAULT FALSE,
    confirmation_token TEXT UNIQUE,
    reminder_24h_sent BOOLEAN DEFAULT FALSE,
    reminder_2h_sent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_cda_bookings_email ON cda_bookings(email);
CREATE INDEX IF NOT EXISTS idx_cda_bookings_appointment_time ON cda_bookings(appointment_time);
CREATE INDEX IF NOT EXISTS idx_cda_bookings_status ON cda_bookings(status);
CREATE INDEX IF NOT EXISTS idx_cda_bookings_token ON cda_bookings(confirmation_token);

-- Verify
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'cda_bookings' 
ORDER BY ordinal_position;
