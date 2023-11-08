import "../Projects.css";
import Content from "../../../Components/Content/Content";
import { NavLink } from "react-router-dom";

const Integration = () => {
  return (
    <Content>
      <div className="project-guide">
        <h1>Data integrations with 3rd parties</h1>
        <h2>Intro</h2>
        <p>
          When performing a data integration with 3rd parties there are a number
          things to take into consideration before you begin designing and
          building.
          <ol>
            <li>Documentation</li>
            <ul>
              <li>Retrieve 3rd party documentation as early as possible.</li>
              <li>
                Validate that their entities are the same as your entities.
              </li>
            </ul>
            <p>
              Note: Make no assumptions when reading through their
              documentation. For example if their documentation mentions
              "dealership", they could be refering to a group of stores under
              one dealership name or they could be refering to a single store.
              Are their identifiers truly unique?
            </p>
            <li>Test data</li>
            <ul>
              <li>Retrieve test data as early as possible.</li>
              <li>Validate that it matches their documentation.</li>
            </ul>
            <p>
              Note: Test data can be full of dummy data making it hard to tell
              if you're receiving the data you're expecting based on the
              documentation. You can only truly validate that the formating of
              the data is as expected. You'll need to wait for prod data to
              ensure the data is as expected. Documentation can be out of date
              and unreliable so you can catch that here.
            </p>
            <li>Define data transfer requirements</li>
            <ul>
              <li>How will the data be transfered?</li>
              <li>Max size of transfer?</li>
              <li>Schedule of transfer?</li>
              <li>Transfer limitations? Rate limiting?</li>
              <li>How far back does the data go?</li>
              <li>Format of data?</li>
              <li>Naming scheme of data?</li>
              <li>Partition of data?</li>
              <li>Is data duplicated/updated/destroyed? How?</li>
              <li>If data is being pushed, how will they retry?</li>
              <li>Misc requirements? Whitelist?</li>
            </ul>
            <li>Define downstream data transfer requirements</li>
            <ul>
              <li>Does the data received suit downstream needs?</li>
              <li>Does it suit their schedule?</li>
              <li>Does the data go as far back as they need?</li>
              <li>Are there fields they require?</li>
              <li>Are they ok with the duplicated/updated/destroyed data?</li>
              <li>What access patterns do they need?</li>
            </ul>
          </ol>
        </p>
        <h2>Design Storage/Load Layer</h2>
        <p>
          See the page on
          <NavLink to="/projects/database"> databases </NavLink>
          for database design considerations. If you develop an API microservice
          for all interactions with your storage layer then it will act as your
          load layer. <br />
          When designing a schema, try to design it in such a way that the
          fields will be common to potential future integrations <br /> &emsp;
          Note that while this layer normalizes schema it shouldn't normalize
          the data itself to avoid any potential data loss should the
          definitions behind the normalizations change and need to be
          reprocessed. For example if it's decided that 1 customer is someone
          whose first name, last name, and email match you may think to only
          create customers by those unique values. Later it may turn out there's
          an issue with people using nicknames or different emails which messed
          with the data normalization. To redefine and reprocess the data would
          affect every downstream consumer. Instead data normalization can be
          done by another data layer, the curated layer, which individual
          downstream consumers would create. <br /> &emsp; Create a data mapping
          spreadsheet to your storage layer where each parameter is mapped to a
          field from the 3rd party vendor. This mapping should only be performed
          by someone with the product knowledge to create it and not a
          developer. Ensure that a mapping exists for all required fields.{" "}
          <br /> &emsp; The layer should:
          <ul>
            <li>Create a common schema</li>
            <li>Define their parameters</li>
            <li>Define their required parameters</li>
            <li>Define their insert/update/delete logic</li>
            <li>Have audit columns</li>
            <li>Define the data mappings</li>
            <li>Define the access patterns and endpoints</li>
            <li>Define if data duplication is possible</li>
            <li>Log activity</li>
            <li>Meet size limitations</li>
            <li>Meet time limitations</li>
            <li>Rate limit if needed</li>
            <li>Create, read, update, destroy data in the database</li>
          </ul>
        </p>
        <h2>Design Extraction Layer</h2>
        <p>
          Design an extraction layer that meets all the requirements specified.
          The extraction layer should end with saving the raw data somewhere.
          Each integration will have it's own extraction layer but a generalized
          common architecture could be created. The layer should:
          <ul>
            <li>Initialize a process id</li>
            <li>Save the process date and other metadata</li>
            <li>Support the max size requirement</li>
            <li>Support the scheduling requirements</li>
            <li>Extract data as far back as required</li>
            <li>Alert on error</li>
            <li>Be easily retryable on error</li>
            <li>Be solely responsible for storing the raw data</li>
            <li>Log that data was saved</li>
          </ul>
        </p>
        <h2>Design Transformation Layer</h2>
        <p>
          Design a transformation layer that picks up the saved raw data the
          extraction layer dropped off and transforms it to match the schema for
          the load layer. The transformed data may be saved somewhere or can be
          sent directly to the load layer since it can always be reprocessed and
          transformed again from the raw data. You can use dataframes to perform
          the data transformations. There are libraries which handle converting
          formats such as csv or json or parquets into dataframes which allow
          you to perform consistent transformations on whole columns of data.
          For python I recommend using the pandas library. The layer should
          <ul>
            <li>Save the process date and other metadata</li>
            <li>Support the max size requirement</li>
            <li>Support the scheduling requirements</li>
            <li>Alert on error</li>
            <li>Be easily retryable on error</li>
            <li>Log that data was transformed</li>
          </ul>
        </p>
        <h2>Validate test data processed</h2>
        <ul>
          <li>All fields mapped have data inserted</li>
          <li>No data lost</li>
          <li>Data updated/destroyed properly</li>
        </ul>
        <h2>Begin pilot customer data</h2>
        <ul>
          <li>All fields mapped have data inserted</li>
          <li>No data lost</li>
          <li>Data updated/destroyed properly</li>
          <li>Data meets expectations to mapping</li>
        </ul>
        <h2>Document onboarding process</h2>
        <ul>
          <li>What data is required?</li>
          <li>What data is optional?</li>
          <li>Create process/tool for onboarding</li>
        </ul>
        <h2>Generic Extraction Layer</h2>
        <img
          src="https://drive.google.com/uc?id=1IDpK9LLLdiBSnWgXVxY_QI3C3Dqfw1yT"
          alt="generic-extraction-layer"
        />
        <a
          href="https://drive.google.com/uc?id=1BdFIpDX2S0yjyG1ruQHwQ5FBb4Z4S3qA"
          target="_blank"
          rel="noreferrer"
        >
          Drawio File
        </a>
        <p>
          The benefit of this architecture plan is that should any issues occur
          during the invocation lambda which causes it to fail more times than
          the queues retry policy, the data will not be lost as it will be sent
          to the DLQ. Note that DLQ messages don't last forever and so an alert
          should be configured on all DLQs. It is possible to directly invoke a
          lambda and lambdas alone can retry on failiure but if they fail more
          times than that retry policy the message is lost. Also should the
          lambda time out or run out of memory any error handling placed within
          the code will be skipped over so it cannot be relied on. With this
          architecture that won't happen and whichever periods of time failed to
          run are saved and can be easily rerun with the push of a button using
          the DLQ redrive policy. The same goes for the data pull lambda and
          queues with the added benefit that the data pull is now partitioned by
          date and by customer. Should any issue occur pulling data for one
          customer, it shouldn't impact the other customers. Lastly the queue
          also provides the added benefit of optional delays. Should the data
          pull be rate limited or need to avoid overloading a server with
          concurrent queries, a queue delay can be used or the lambdas max
          concurrency can be set. This design is also highly scalable as it is
          serverless.
        </p>
        <p>Cost Analysis (As of 2023)</p>
        <ul>
          <li>Eventbridge: $1.00/million custom events published</li>
          <li>
            SQS: From 1 Million to 100 Billion Requests/Month $0.40 per million
          </li>
          <li>
            Lambda: $0.0000166667 for every GB-second and $0.20 per 1M requests
          </li>
          <li>S3: First 50 TB / Month $0.023 per GB</li>
        </ul>
        <p>
          <br /> &emsp;Assuming a daily data pull, 30 times a month.
          <br /> &emsp; Eventbridge cost: 30 events per month for $0.00003/month
          <br /> &emsp; Assuming 100,000 customers per day.
          <br /> &emsp; SQS cost: 3 million events per month for $1.20/month
          <br /> &emsp; Assuming each invocation takes 1min and 512MB ram
          <br /> &emsp; Invocation Lambda cost: 30 invocations for $0.03/month
          <br /> &emsp; Assuming each data pull takes 1min and 512MB ram
          <br /> &emsp; 3000000 invocations * .5GB * 60seconds * $0.0000166667
          <br /> &emsp; Data Pull Lambda cost: $1500.90/month
          <br /> &emsp; Assuming each data pull gets 1Kb data
          <br /> &emsp; S3 cost: 3Gb for $0.069/month
          <br /> &emsp; Total cost: $1502.20/month
        </p>
        <p>
          These are rough estimate numbers to get a general idea and should be
          adjusted depending on the integration.
        </p>
        <h2>Generic Transformation Layer</h2>
        <img
          src="https://drive.google.com/uc?id=1bduximQ3X4kAKp8KUcgToQxTSOAAC8fE"
          alt="generic-transformation-layer"
        />
        <a
          href="https://drive.google.com/uc?id=192cpJvk7hMx2U1MHAdjPT66embrcq2I0"
          target="_blank"
          rel="noreferrer"
        >
          Drawio File
        </a>
        <p>
          Again a benefit of this design is the use of queues should anything go
          wrong during the lambda invocation and the DLQ for easily redriving
          failed invocations. While it is possible to directly subscribe a queue
          to an s3 bucket, the bucket must be modified each time to do so. It is
          easier to subscribe and filter to Eventbridge than it is to subscribe
          and filter an S3 bucket and it has the additional benefit of allowing
          any resource to subscribe to the S3 events.
        </p>
        <p>Cost Analysis (As of 2023)</p>
        <ul>
          <li>Eventbridge: $1.00/million custom events published</li>
          <li>
            SQS: From 1 Million to 100 Billion Requests/Month $0.40 per million
          </li>
          <li>
            Lambda: $0.0000166667 for every GB-second and $0.20 per 1M requests
          </li>
          <li>S3: First 50 TB / Month $0.023 per GB</li>
        </ul>
        <p>
          <br /> &emsp;Eventbridge cost: 3 million events per month for $3/month
          <br /> &emsp; SQS cost: 3 million events per month for $1.20/month
          <br /> &emsp; Assuming each invocation takes 1min and 512MB ram
          <br /> &emsp; Assuming each transformation takes 1min and 512MB ram
          <br /> &emsp; 3000000 invocations * .5GB * 60seconds * $0.0000166667
          <br /> &emsp; Transformation Lambda cost: $1500.90/month
          <br /> &emsp; Total cost: $1504.20/month
        </p>
        <p>
          These are rough estimate numbers to get a general idea and should be
          adjusted depending on the integration.
        </p>
      </div>
    </Content>
  );
};

export default Integration;
