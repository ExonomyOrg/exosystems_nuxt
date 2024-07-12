
<template>
  <div>
      <Navbar />

    <div class="exonomy-design">
      <h1>Exonomy and Exocracy Overview</h1>
  
      <section>
        <h2>1. Tooling</h2>
        <p>
          MVP: The P2P solution for 100% decentralization, supporting persistence of peer-to-peer streaming data, resulting in an eventually consistent shared state between all peers. Peers don’t rely on the availability of original data authors due to decentralized topology.
        </p>
        <p>
          Tools:
          <ul>
            <li>1.1 SocketSupply runtime</li>
            <li>1.2 Nuxt Framework</li>
            <li>1.3 SQLite3 - educational resources:
              <ul>
                <li>1.3.1 <a href="https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m">Drizzle ORM, SQLite and Nuxt JS - Getting Started</a></li>
                <li>1.3.2 <a href="https://github.com/WiseLibs/better-sqlite3">GitHub - WiseLibs/better-sqlite3: The fastest and simplest library for SQLite3 in Node.js.</a></li>
              </ul>
            </li>
            <li>1.4 Vuetify UI theming</li>
          </ul>
        </p>
      </section>
  
      <section>
        <h2>2. Model</h2>
        <p>
          Detailed database structure including Voucher, Campaigns, Trusts, Projects, CrowdFunders, CrowdSourcing, Exonomists.
        </p>
        <p>
          <strong>Voucher:</strong>
          <ul>
            <li>2.1 VoucherID (ContentID from IPFS Create event)</li>
            <li>2.2 Voucher (Descriptive name)</li>
            <li>2.3 Notes (Long form explanation)</li>
            <li>2.4 Author (Creator and first Owner) (Foreign Key from Exonomists)</li>
            <li>2.5 Owner (Current Owner in possession) (Foreign Key from Exonomists)</li>
            <li>2.6 Status (Created, Sold, Redeemed)</li>
            <li>2.7 FaceValue (Declared value of the voucher’s product or service)</li>
            <li>2.8 SaleValue (Final value of the voucher’s sale to a new owner)</li>
            <li>2.9 Auction (Boolean of Auctioned status)</li>
          </ul>
        </p>
        <p>
          <strong>Campaigns:</strong>
          <ul>
            <li>2.10 CampaignID (possibly the same SubclusterID as a voucher or simply an IPFS DocumentID)</li>
            <li>2.11 Campaign Title</li>
            <li>2.12 Campaign Long Description</li>
            <li>2.13 StartDate</li>
            <li>2.14 EndDate</li>
            <li>2.15 AuthorID</li>
          </ul>
        </p>
        <p>
          <strong>2.16 Delegates, Trusts, Projects, CrowdFunders, CrowdSourcing, Exonomists:</strong>
          (Details as per your project's specific requirements)
        </p>
      </section>
  
      <section>
        <h2>3. Exonomy App Feature Tree</h2>
        <p>
          Features to be included in v1.0:
          <ul>
            <li>3.1 Exonomy (NFT) Wallet</li>
            <li>3.2 CRUD operations</li>
            <li>3.3 Barter and sell for cash/crypto</li>
            <li>3.4 Voucher Market / Auction</li>
            <li>3.5 Cost Sharing</li>
            <li>3.6 Crowdfunding Campaigns</li>
            <li>3.7 Exocracy Lite features (decentralized project management)</li>
            <li>3.8 CRUD operations for CrowdFunding and CrowdSourcing</li>
          </ul>
        </p>
      </section>
  
      <section>
        <h2>4. Exocracy.com Feature Tree</h2>
        <p>
          Hosted project management web app running on PostgreSQL with SQL REST API. Integration with Exonomy mobile app using SQLite3 for local synchronization. Offers free and paid tiers based on project size.
        </p>
        <p>
          Pricing tiers:
          <ul>
            <li>4.1 Free tier: 1 project with up to 100 tasks</li>
            <li>4.2 Paid tiers:
              <ul>
                <li>4.2.1 Up to 10K tasks: $5 per month</li>
                <li>4.2.2 Up to 100K tasks: $25 per month</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          Visitors to Exocracy.com can download the Exonomy app for full Exonomy functionality.
        </p>
      </section>
  
    </div>
  </div>
  </template>
  
  <script>
  import Navbar from '@/components/navbar.vue'; 
  export default {
    // Optionally, you can define meta tags, head, etc.
    head() {
      return {
        title: 'Exonomy and Exocracy Overview - ExoSystems',
        meta: [
          { hid: 'description', name: 'description', content: 'Overview of Exonomy and Exocracy projects at ExoSystems, detailing tooling, models, and features.' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
.exonomy-design {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  color: #e0e0e0;
  line-height: 1.6;
  background-color: #1a1a1a;
}

.exonomy-design h1 {
  color: #61dafb;
  font-size: 2.5em;
  border-bottom: 3px solid #61dafb;
  padding-bottom: 15px;
  margin-bottom: 30px;
}

.exonomy-design h2 {
  color: #4fa8d5;
  font-size: 1.8em;
  background-color: #2c3e50;
  padding: 15px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.exonomy-design h2:hover {
  background-color: #34495e;
}

.exonomy-design h3 {
  color: #bdc3c7;
  font-size: 1.4em;
  margin-top: 25px;
  margin-bottom: 15px;
}

.exonomy-design .section-content {
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(255,255,255,0.1);
}

.exonomy-design p {
  margin-bottom: 15px;
}

.exonomy-design ul {
  padding-left: 25px;
}

.exonomy-design li {
  margin-bottom: 10px;
}

.exonomy-design a {
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.exonomy-design a:hover {
  color: #4fa8d5;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .exonomy-design {
    padding: 20px;
  }
 
  .exonomy-design h1 {
    font-size: 2em;
  }
 
  .exonomy-design h2 {
    font-size: 1.5em;
  }
}
    </style>
  