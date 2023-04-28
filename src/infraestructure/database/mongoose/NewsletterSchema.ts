import { Schema, model } from 'mongoose';

const NewsletterSchema = new Schema({
  mail: String
});

export default model('Newsletter', NewsletterSchema);