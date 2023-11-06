import "../Projects.css";
import Content from "../../../Components/Content/Content";

const Website = () => {
  return (
    <Content>
      <div className="project-guide">
        <h1>Building A Static Website With Github</h1>
        <img
          src="https://drive.google.com/uc?id=1rxWNrfg_zzVIJfEjGOUMbGs47zcY9LRw"
          alt="web-thumbnail"
          width="400"
          height="300"
        />
        <h2>What Is Github Pages</h2>
        <p>
          Github Pages is a free service offered by github for creating your own
          static website. It's what's being used to host this website right now.
          Github Pages is a great feature to use, however it comes with a few
          limitations to keep in mind. The first of which is that, unless you're
          interested in buying a domain name, you are limited as to what URL the
          site uses. The format the URL follows is &lt;UserName&gt;.github.io.
          The second limitation is that there is a maximum size of 1Gb that your
          website can be. This can cause problems if you want to add multiple
          images to your site but there are workarounds I'll go into such as
          storing files for free on Google Drive. The third limitation of Github
          Pages we'll cover is that you can only create static websites. No
          server-side code can be run, only HTML, CSS, and Javascript.
        </p>
        <img
          src="https://drive.google.com/uc?id=1cgbBsbqPcFSefFzYuVuVN7g4fH0zT-MV"
          alt="github-pages-thumbnail"
        />
        <h2>Setting Up A Github Pages Repo</h2>
        <p>
          The first step to setting up your website with Github Pages is to sign
          up (or login) to Github, which can be done{" "}
          <a href="https://github.com/join" target="_blank" rel="noreferrer">
            here
          </a>
          . Once you login, you'll want to create a new repo which can be done{" "}
          <a href="https://github.com/new" target="_blank" rel="noreferrer">
            here
          </a>
          . Under repo, enter &lt;UserName&gt;.github.io replacing
          &lt;UserName&gt; with your Github username. It's a good idea to write
          some kind of description under the description tab and to check off
          the box labeled "Initialize this repository with a README" so that
          anyone viewing your repo will know a bit about it. After that, hit
          create repository. To make changes to the repo and start building your
          website, you will need to use Git to clone the repo, more information
          about Git can be found{" "}
          <a
            href="https://guides.github.com/activities/hello-world/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . Your command to clone the repository will be: <br />
          <br />
          &lt;git clone https://github.com/username/username.github.io&gt;{" "}
          <br />
          <br />
          where username is replaced by your username. Once your repo is cloned
          to you're ready to start adding files to create your website.
        </p>
        <h2>Adding Files To Create Your Website</h2>
        <p>
          As mentioned previously, Github Pages lets you build your website
          using HTML, CSS, and Javascript. A great resource for learning more
          about these languages can be found at{" "}
          <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">
            w3schools.com
          </a>
          . For now we will just create a very basic website. Open up your
          project folder where you cloned your repo. Using a text editor or IDE
          of your choice, create a new text file with the contents "hello world"
          written inside and save it as "index.html" to the project folder.
          Finally, run the following Git commands to add, commit, and push your
          changes. <br />
          <br />
          &lt;git add --all&gt; <br />
          &lt;git commit -m "Initial commit"&gt; <br />
          &lt;git push -u origin master&gt; <br />
          <br />
          Now you can open up your web browser and go to
          https://username.github.io to view your website.
        </p>
        <h2>A Method For Adding Images</h2>
        <p>
          Due to the file size limit of 1Gb, you may find you quickly run out of
          space when saving images to your repo. A workaround that I use is to
          host my images for free on Google Drive. Every Google account gets
          15Gb free cloud storage to use with Google Drive. Head over to{" "}
          <a
            href="https://www.google.com/drive/"
            target="_blank"
            rel="noreferrer"
          >
            Google Drive
          </a>{" "}
          and create a folder for your website to upload the images there. To
          get a direct link to the image you want to use, right click on it in
          Google Drive and click "Get Shareable Link" and make sure the
          resulting pop up says "Anyone on the internet with this link can
          view". The link it provides will be of the format: <br />
          <br />
          https://drive.google.com/file/d/&lt;Your_Image_ID&gt;/view?usp=sharing{" "}
          <br />
          <br />
          Copy the &lt;Your_Image_ID&gt; portion of the text in your shareable
          link between the parenthesis to get your image's ID. Your final direct
          link to your image will be of the format: <br />
          <br />
          https://drive.google.com/uc?id=&lt;Your_Image_ID&gt; <br />
          <br />
          Use this link as the href for your website image.
        </p>
      </div>
    </Content>
  );
};

export default Website;
