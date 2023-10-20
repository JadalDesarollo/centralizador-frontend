//@ts-nocheck
import { createServer, Request } from 'miragejs';
import email from './emails.json'
import chats from '../api/chats.json'
import invocices from './invoice.json';
import users from './users.json'
import userProfile from './user.json';
import pricing from './pricing.json'
import faq from './faq.json'
import chartData from './chartData.json'
import rechartData from './rechartData.json'
import dashboard from './dashboard.json'

type Request<T> = {
    params: Record<string, keyof T>
}
export default function () {
    if (process.env.NODE_ENV === 'development') {
      return; // No ejecutar Mirage en entorno de desarrollo
    }
  
    // Resto de la configuración de Mirage
    // ...
  }
  