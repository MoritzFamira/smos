namespace SMOS.Model;

public class Design
{
    public Design(string fileEnding, string guid, string artist, string name)
    {
        FileEnding = fileEnding;
        Guid = guid;
        Artist = artist;
        Name = name;
    }

    public string FileEnding { get; }
    public string Guid { get; }
    public string Artist { get; }
    public string Name { get; }
}