import "../Projects.css";
import Content from "../../../Components/Content/Content";

const Database = () => {
  return (
    <Content>
      <div className="project-guide">
        <h1>Data Storage Considerations</h1>
        <h2>SQL vs NoSQL</h2>
        <ol>
          <li>Schema</li>
          <p>
            SQL databases are relational with a predefined schema and strict
            consistency. The benefit to this is always knowing what data is
            available and of what type. Another benefit is being able to model
            relationships between data. A downside is the added development time
            to properly design a schema. NoSQL databases are schema-less. The
            benefit is faster development time for accomodating evolving data
            models. A downside is not always knowing what data is available and
            in what format. Another downside is added difficulty in storing
            relationships requiring data redundancy.
          </p>
          <li>Scalability</li>
          <p>
            SQL databases can scale vertically but it can be more complicated to
            scale horizontally. NoSQL database scale horizontally easily.
          </p>
          <li>Consistency</li>
          <p>
            SQL databases adhere to ACID properties. Atomicity, a transaction is
            treated as a single unit of work, operations in a transaction are
            either fully complete or not done, there is no partial state.
            Consistency, data will not be committed which violates constraints.
            Isolation, concurrent transactions cannot interfere with each other
            to avoid data corruption. Durability, once a transaction is
            committed it persists to durable storage. NoSQL does not follow all
            of these properties and instead has eventual consistency. This means
            there is the potential to read outdated data and for data to
            overwrite each other.
          </p>
          <li>Queries</li>
          <p>
            SQL queries are much more expressive than NoSQL queries allowing for
            joins, aggregations, subqueries, sort/grouping, and conditional
            filtering. NoSQL queries are limited by their primary key and
            secondary indexes to avoid costly data scans. This encourages
            designing the database via predetermined access patterns. With
            Dynamodb for example all tables must have a primary key. This can
            either be a single attribute primary key, only a partition key,
            which must be unique to the table. Or it can be a composite primary
            key, a partition key and a sort key, where multiple items can share
            a partition key but must have different sort keys. The composite
            primary key allows for querying either only by partition key to get
            a group of items or by both partition key and sort key for a
            specific item. Outside of this we must create secondary indexes to
            support additional queries. While relational databases have query
            optimizers to determine the best available index to perform the
            query, Dynamodb does not. There are 2 kinds of secondary indexes for
            Dynamodb. Local secondary index shares the same partition key as the
            base table but a different sort key. Global secondary indexes have a
            different partition key than the base table and may have an optional
            sort key. Queries using LSI and GSI can return multiple entries
            whereas a query using a primary key will always return one. All
            secondary indexes are attributed to one table. For dynamodb there's
            a limit of 5 LSI's per table which must be declared on table
            creation and a limit of 20 GSI's per table which may be declared
            after table creation. With this in mind we must be careful about
            designing the access patterns of a NoSQL table.
          </p>
        </ol>
        <h2>Database Microservice</h2>
        <p>
          <br /> &emsp;Consider creating an API microservice for interactions
          with your database. The alternative is to independently access the
          database directly where ever it is needed but this has a few
          downsides. For one, if you decide you want some action to take place
          every time some interaction with the database occurs you now need to
          implement that logic everwhere it is accessed. For example if I want
          to be notified as soon as new data is available on the database.
          Another downside is when using a SQL database, managing schema changes
          to the database across multiple applications. A change to the schema
          can cause all applications to be out of date with the current schema
          and require updating each of them. Using an API microservice addresses
          these issues. Because all interactions are performed through it, any
          logic that must occur per transaction only needs to exist in one
          location and can send out event notifications. As for schema changes
          applications may still need to be updated but you can version your
          endpoints to allow for the applications to still use older working
          endpoints. <br /> &emsp; For example say I have a table product and a
          table customer with a many to many relationship modeled by an
          association table product_to_customer. Originally the
          product_to_customer relationship always represented a product that had
          been sold to the customer. After an update, a boolean column
          "was_recommended" is added to the table to represent if a product was
          recommended to the customer but not necessarily sold to them as part
          of that transaction. Previously just querying the table gave all
          products sold but now you have to filter to get that data. With an API
          the existing endpoint logic can be modified to add that filtering
          automatically so no application changes need to be made. Then a new
          version of the endpoint can be created for applications to update to
          that gives them the option to filter or not depending on their needs.
          Without an API this is a schema change which could have broken those
          applications. <br /> &emsp; Another benefit to having a microservice
          for your database is for improved security. You can place the backend
          logic of your API behind a VPC and ip whitelist your database. Then
          you can add any security you want to your API and grant access to
          endpoints per application. This way you know exactly what operations
          applications are capable of performing on your database. <br /> &emsp;
          Another benefit is in visibility. Say your database is having
          performance issues and you want to debug as to why. If you have dozens
          of applications each directly querying the database it can be harder
          to find who is performing what query. Especially if say they're all
          performing the same query but one isn't using your cache or wif they
          implemented the query inefficiently. With a microservice you can see
          all the possible query logic in one place and you can easily track who
          is performing what query.
        </p>
        <h2>Access Control</h2>
        <ul>
          <li>Read only users</li>
          <li>Read/Write users</li>
          <li>Admin users</li>
          <li>Process in place for granting access</li>
        </ul>
        <h2>Audit Columns</h2>
        <ul>
          <li>Who created/updated the data?</li>
          <li>When?</li>
        </ul>
        <h2>Backups</h2>
        <ul>
          <li>Automated backups?</li>
          <li>Snapshot/restore?</li>
        </ul>
        <h2>Timestamps</h2>
        <ul>
          <li>Server side/Client side?</li>
          <li>Timezone saved?</li>
        </ul>
        <h2>Performance</h2>
        <p>
          If you find you are having performance issues with your database there
          are a number of things to consider
        </p>
        <ol>
          <li>Query Improvements</li>
          <p>
            Check which queries are being run on the database. Are they
            inefficient? Unnecessary subqueries? Bad ordering? Querying too
            much? Costly filtering? Are there bursts of query loads?
          </p>
          <li>Schema Improvements</li>
          <p>Are your datatypes too large? Too many joins?</p>
          <li>Indexing</li>
          <p>
            If writes are slow are there too many indexes? If reads are slow are
            there not enough?
          </p>
          <li>Limit queryable fields</li>
          <p>
            If providing an interface to the database, are all the queryable
            fields necessary?
          </p>
          <li>Partitions</li>
          <p>Can you partition your database?</p>
          <li>API Limitations</li>
          <p>
            If providing an interface to the database, can you rate limit the
            number of operations in a given timespan?
          </p>
          <li>Caching</li>
          <p>
            If the same data is being queried often, consider caching the data.
          </p>
          <li>Async Queries</li>
          <p>
            Long queries can be asynchronous and be polled for completion status
          </p>
          <li>Backup/Wipe Data</li>
          <p>
            Is the database getting too large? Is there unused data that can be
            moved?
          </p>
          <li>Scaling</li>
          <p>Vertically or horizontally</p>
        </ol>
      </div>
    </Content>
  );
};

export default Database;
