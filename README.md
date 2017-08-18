### Mr Fix-It
#### A repair technician job service.

An Epicodus Solo project for Mr. Fix-It, a web-based maintenance job board posting forum.

COMPLETED:
* Users can register and log on
* Users may sign up to be "workers" on the site.
* New jobs may be added to the jobs list.
* A job can be assigned to a worker.
* A worker may take on mulitple jobs from the Worker Dashboard.
* Make *claiming* a job an **AJAX** action.

IN PROGRESS
* A worker may designate one **active** job at a time. **AJAX**
* Workers may mark jobs complete, and select a new active job. **AJAX**


## Project Build

Download from the [repo](https://github.com/GrapeSalad/SonOfCod)

Open Viual Studio 2015 and choose the Open Project option.

Navigate to the directory in which you downloaded the repo and open the project file.

### Migration

Navigate to `....\project-name\src\projectname`.
Run this command in your terminal: `dotnet ef database update`.

### Data Entry

Open [SSMS](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms), Log in to the default database, Find the open file button in the tool ribbon, navigate to and double click on the file named Data_For_Migration in the SQL_Queries folder.

### Running the Server

After installation and Migration, press f5 or the play button in the toolbar to run the server and have the site appear in your default browser.

## Known Bugs

Not the prettiest site.
Cannot set any jobs active.
Cannot Set any jobs complete, as there are no active jobs.

## Technologies Utilized

* C#
* Visual Studio
* ASP.NET MVC
* ASP.NET
* CSS

## Credits

* David Wilson