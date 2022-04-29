namespace SMOS.Model;

public class Design
{
    public Design(string filename, int artistId)
    {
        Filename = filename;
        ArtistID = artistId;
    }

    public string Filename { get; }
    public int ArtistID { get; }
}