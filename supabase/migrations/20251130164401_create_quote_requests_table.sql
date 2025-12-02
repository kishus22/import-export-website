/*
  # Create Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text) - Customer's full name
      - `company` (text) - Company name
      - `product` (text) - Product requested
      - `quantity` (text) - Required quantity
      - `packaging_type` (text) - Packaging preference
      - `container_type` (text) - Container size preference
      - `destination_port` (text) - Destination port location
      - `whatsapp_contact` (text) - WhatsApp contact number
      - `created_at` (timestamptz) - Timestamp of request

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for anyone to insert quote requests (public form)
    - Add policy for authenticated users to read all requests (admin access)
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  product text NOT NULL,
  quantity text NOT NULL,
  packaging_type text DEFAULT '',
  container_type text DEFAULT '',
  destination_port text NOT NULL,
  whatsapp_contact text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
