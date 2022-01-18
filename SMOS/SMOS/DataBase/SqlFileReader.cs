namespace SMOS.DataBase;
//TODO make this read files and give them back in a string that can be used by code
public class SqlFileReader
{
    public SqlFileReader(string path)
    {
        Path = path;
    }

    private string Path { get; set; }

    public string Read()
    {
        string sqlCode = "";
        return sqlCode;
    }
}