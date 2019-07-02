To build the website you'll need to install Wyam, a .NET Core based static site
generator. To install Wyam do the following:

```
dotnet tool install -g Wyam.Tool
```

To build the website, then do the following:

```
cd src
wyam build
```

From the same directory as above, to preview the website locally do:
```
wyam -p
```
