window.pslviz = window.pslviz || {};

window.pslviz.links = [
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Ben', 'Dhanya')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Ben', 'Elena')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "0.9852958275005221"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "0.9852958275005221"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Ben', 'Elena')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.9968897991348058"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.9968897991348058"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.9968897991348058"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Ben', 'Elena')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.999052278639283"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.999052278639283"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.999052278639283"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.998391599743627"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.998391599743627"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Ben', 'Elena')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Ben', 'Elena') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.9994199967477471"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.9994199967477471"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "0.7091349065303802"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "0.7091349065303802"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.9967448872048408"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Ben', 'Dhanya') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.9967448872048408"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Arti', 'Alex')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9883017838001251"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9883017838001251"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9883017838001251"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Arti', 'Alex')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.961056612432003"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.961056612432003"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.961056612432003"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Arti', 'Alex')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Arti', 'Alex')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.983275081962347"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.983275081962347"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.983275081962347"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Arti', 'Alex')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Arti', 'Alex')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.9914452992379665"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.9914452992379665"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Arti', 'Alex') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.9914452992379665"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Sabina', 'Dhanya')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7175630927085876"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7175630927085876"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7175630927085876"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Elena', 'Steve') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "0.6127872467041016"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "0.6127872467041016"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.9859349140897393"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.9859349140897393"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "0.9626448750495911"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "0.9626448750495911"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Elena', 'Ben') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Elena', 'Alex') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Elena', 'Arti') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.9987289914861321"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.9987289914861321"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Alex')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Steve')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Elena', 'Sabina') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Sabina')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.9979662369005382"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.9979662369005382"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Steve', 'Elena') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Steve', 'Jay') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Steve', 'Ben') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.9921993324533105"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.9921993324533105"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Steve', 'Alex') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Steve', 'Arti') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Arti')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Elena', 'Dhanya') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Jay')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Elena', 'Ben')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Elena', 'Jay') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.9979574189055711"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.9979574189055711"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Steve', 'Dhanya') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Alex')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.9983348902314901"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Sabina', 'Dhanya') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.9983348902314901"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Arti')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "0.9997152515279595"
    },
    {
        "source": "KNOWS('Steve', 'Dhanya')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "0.9997152515279595"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Elena')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Sabina')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Steve', 'Jay')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Steve', 'Sabina') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Jay', 'Elena') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Jay', 'Steve') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "0.9999971500403717"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "0.9999971500403717"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.9843981629237533"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.9843981629237533"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Jay', 'Ben') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( KNOWS('Alex', 'Dhanya') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Jay', 'Alex') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Jay', 'Arti') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( KNOWS('Dhanya', 'Alex') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.999823363541509"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.999823363541509"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Jay', 'Dhanya') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.9931490942835808"
    },
    {
        "source": "KNOWS('Jay', 'Dhanya')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.9931490942835808"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Arti')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Alex')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Elena')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Sabina')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Jay', 'Steve')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Jay', 'Sabina') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Ben', 'Steve') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.9894323535263538"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.9894323535263538"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Ben', 'Jay') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Ben', 'Alex') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Alex')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Jay')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "0.9879627656191587"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "0.9879627656191587"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Sabina')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Ben', 'Sabina') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Alex', 'Elena') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Alex', 'Steve') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Arti')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Ben', 'Arti') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.9890840295702219"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.9890840295702219"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Alex', 'Ben') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.9990126810735092"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( KNOWS('Arti', 'Dhanya') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.9990126810735092"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "0.9812411833554506"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "0.9812411833554506"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Alex', 'Arti') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Dhanya', 'Arti') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Alex', 'Dhanya') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Elena')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.9916857406497002"
    },
    {
        "source": "KNOWS('Alex', 'Dhanya')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.9916857406497002"
    },
    {
        "source": "KNOWS('Alex', 'Sabina')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Steve')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Alex', 'Sabina') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( KNOWS('Elena', 'Dhanya') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9995784438215196"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9995784438215196"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Arti', 'Elena') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( KNOWS('Steve', 'Dhanya') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Arti', 'Steve') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( KNOWS('Jay', 'Dhanya') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Dhanya')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Dhanya') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Jay')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Alex', 'Arti')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Alex', 'Jay') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Arti', 'Ben') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Arti', 'Jay') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9991767379688099"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Dhanya', 'Ben') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.9991767379688099"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( KNOWS('Dhanya', 'Elena') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( KNOWS('Dhanya', 'Jay') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( KNOWS('Dhanya', 'Sabina') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( KNOWS('Dhanya', 'Steve') ) | ~( KNOWS('Arti', 'Dhanya') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Dhanya')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.9612997621297836"
    },
    {
        "source": "KNOWS('Arti', 'Dhanya')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Sabina', 'Dhanya') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.9612997621297836"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Elena')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Jay')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Sabina')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Steve')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Arti', 'Sabina') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( KNOWS('Elena', 'Sabina') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Dhanya', 'Elena') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( KNOWS('Steve', 'Sabina') ) | ~( KNOWS('Dhanya', 'Steve') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( KNOWS('Jay', 'Sabina') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Dhanya', 'Jay') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "0.6144331097602844"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "0.6144331097602844"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9916447112336755"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9916447112336755"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( KNOWS('Ben', 'Sabina') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Dhanya', 'Ben') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( KNOWS('Alex', 'Sabina') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Dhanya', 'Alex') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9987665199441835"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9987665199441835"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( KNOWS('Arti', 'Sabina') ) | ~( KNOWS('Dhanya', 'Arti') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.9632414728403091"
    },
    {
        "source": "KNOWS('Dhanya', 'Arti')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Sabina', 'Arti') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.9632414728403091"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Elena')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( KNOWS('Sabina', 'Elena') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9926272956654429"
    },
    {
        "source": "KNOWS('Dhanya', 'Alex')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( KNOWS('Sabina', 'Alex') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9926272956654429"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Ben')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Sabina', 'Ben') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( KNOWS('Elena', 'Alex') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "0.9998505879484583"
    },
    {
        "source": "KNOWS('Dhanya', 'Steve')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( KNOWS('Sabina', 'Steve') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "0.9998505879484583"
    },
    {
        "source": "KNOWS('Dhanya', 'Sabina')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.9939182577654719"
    },
    {
        "source": "KNOWS('Dhanya', 'Jay')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( KNOWS('Sabina', 'Jay') ) | ~( KNOWS('Dhanya', 'Sabina') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.9939182577654719"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( KNOWS('Elena', 'Arti') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( KNOWS('Elena', 'Ben') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( KNOWS('Steve', 'Ben') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( KNOWS('Steve', 'Alex') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( KNOWS('Steve', 'Arti') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( KNOWS('Elena', 'Jay') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( KNOWS('Jay', 'Alex') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( KNOWS('Jay', 'Arti') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( KNOWS('Jay', 'Ben') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( KNOWS('Jay', 'Elena') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( KNOWS('Steve', 'Jay') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( KNOWS('Ben', 'Arti') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( KNOWS('Jay', 'Steve') ) | ~( KNOWS('Sabina', 'Jay') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( KNOWS('Ben', 'Alex') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( KNOWS('Ben', 'Steve') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( KNOWS('Ben', 'Jay') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( KNOWS('Alex', 'Arti') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( KNOWS('Alex', 'Ben') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( KNOWS('Alex', 'Elena') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Ben', 'Elena')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.983022402971983"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( KNOWS('Ben', 'Elena') ) | ~( KNOWS('Sabina', 'Ben') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.983022402971983"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( KNOWS('Elena', 'Steve') ) | ~( KNOWS('Sabina', 'Elena') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( KNOWS('Alex', 'Jay') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Arti', 'Alex')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "0.9801241848617792"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( KNOWS('Arti', 'Alex') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "0.9801241848617792"
    },
    {
        "source": "KNOWS('Sabina', 'Alex')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( KNOWS('Alex', 'Steve') ) | ~( KNOWS('Sabina', 'Alex') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Ben')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( KNOWS('Arti', 'Ben') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( KNOWS('Arti', 'Elena') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Jay')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( KNOWS('Arti', 'Jay') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Elena')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( KNOWS('Steve', 'Elena') ) | ~( KNOWS('Sabina', 'Steve') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Arti')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "KNOWS('Sabina', 'Steve')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( KNOWS('Arti', 'Steve') ) | ~( KNOWS('Sabina', 'Arti') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "0.6735199689865112"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "0.6735199689865112"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "0.999920480135188"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "0.999920480135188"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "0.7461261749267578"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "0.7461261749267578"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "0.9166966080665588"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "0.9166966080665588"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "0.7644714117050171"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "0.7644714117050171"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( LIVED('Steve', 'New Jersey') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( LIVED('Steve', 'New Jersey') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( LIVED('Ben', 'Pennsylvania') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.6754817068576813"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( LIVED('Ben', 'Pennsylvania') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.6754817068576813"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "0.6735555231571198"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "0.6735555231571198"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.6754817068576813"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.6754817068576813"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "0.8815638497471809"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "0.8815638497471809"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Dhanya', 'California') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.7012811005115509"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Dhanya', 'California') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.7012811005115509"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.7849065810441971"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.7849065810441971"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( LIVED('Jay', 'New Jersey') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( LIVED('Jay', 'New Jersey') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "0.7454868257045746"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "0.7454868257045746"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.6880691647529602"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.6880691647529602"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "0.8819716572761536"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "0.8819716572761536"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.8105236738920212"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.8105236738920212"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.8105236738920212"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.8105236738920212"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Dhanya', 'California') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "0.74649778008461"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Dhanya', 'California') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "0.74649778008461"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( LIVED('Jay', 'Pennsylvania') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.6753415763378143"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( LIVED('Jay', 'Pennsylvania') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.6753415763378143"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "0.7632053196430206"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "0.7632053196430206"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( LIVED('Arti', 'New York') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.7336429059505463"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( LIVED('Arti', 'New York') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.7336429059505463"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( LIVED('Sabina', 'New York') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "0.7053667306900024"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( LIVED('Sabina', 'New York') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "0.7053667306900024"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.6753415763378143"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.6753415763378143"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.6868163645267487"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.6868163645267487"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "0.8319950699806213"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Alex', 'Maryland') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "0.8319950699806213"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.7336429059505463"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.7336429059505463"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "0.9164569303393364"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "0.9164569303393364"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "0.8818786293268204"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "0.8818786293268204"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "0.8822212293744087"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "0.8822212293744087"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "0.8338052481412888"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "0.8338052481412888"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "0.9999883386672082"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( LIVED('Arti', 'Maryland') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "0.9999883386672082"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.763435497879982"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Elena', 'Maryland') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.763435497879982"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Jay', 'Maryland') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.8101822882890701"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Steve', 'Maryland') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.8101822882890701"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.7339212894439697"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( LIVED('Ben', 'Maryland') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.7339212894439697"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.8101822882890701"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.8101822882890701"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Dhanya', 'California') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.7721723765134811"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Dhanya', 'California') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.7721723765134811"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( LIVED('Ben', 'New York') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.7339212894439697"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( LIVED('Ben', 'New York') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.7339212894439697"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( LIVED('Sabina', 'New York') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( LIVED('Sabina', 'New York') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.7022062838077545"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.7022062838077545"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "0.7474188804626465"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "0.7474188804626465"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.7734305709600449"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.7734305709600449"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "0.9999878741264183"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( LIVED('Sabina', 'California') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "0.9999878741264183"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( LIVED('Ben', 'Washington') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "0.9999035140499473"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( LIVED('Ben', 'Washington') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "0.9999035140499473"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( LIVED('Ben', 'New York') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7070260643959045"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( LIVED('Ben', 'New York') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7070260643959045"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( LIVED('Arti', 'New York') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( LIVED('Arti', 'New York') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.7844839692115784"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( LIVED('Jay', 'California') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.7844839692115784"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "0.7629587203264236"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( LIVED('Steve', 'California') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "0.7629587203264236"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( LIVED('Arti', 'California') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Maryland') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.49394315481185913"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.49394315481185913"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7350971698760986"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01775527000427246"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.8639729917049408"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8162886202335358"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.8913078159093857"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIVED('Elena', 'Illinois') ) | ~( KNOWS('Elena', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7538440376520157"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5698549151420593"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5698549151420593"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5698549151420593"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5698549151420593"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'New Jersey') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Pennsylvania') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'Maryland') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5698549151420593"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5698549151420593"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7217096984386444"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8148118257522583"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8162619471549988"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7124698758125305"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.794384777545929"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5690767168998718"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5690767168998718"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIVED('Jay', 'California') ) | ~( KNOWS('Jay', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.6227418184280396"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'New Jersey') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'Maryland') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5690767168998718"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.5690767168998718"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.6811012327671051"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.8050845265388489"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.7544728368520737"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7534778565168381"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.622564971446991"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIVED('Steve', 'California') ) | ~( KNOWS('Steve', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7364363968372345"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6517631411552429"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6517631411552429"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6517631411552429"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6517631411552429"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Pennsylvania') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'New York') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6517631411552429"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6517631411552429"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7658388167619705"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Maryland') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.7909693717956543"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.8149176687002182"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIVED('Ben', 'Washington') ) | ~( KNOWS('Ben', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.8060725927352905"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.006818056106567383"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.006818056106567383"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.6491450667381287"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.6491450667381287"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.006818056106567383"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.006818056106567383"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.6491450667381287"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.6491450667381287"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7620018124580383"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7620018124580383"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.4945333003997803"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.4945333003997803"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7620018124580383"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7620018124580383"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.6491450667381287"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.6491450667381287"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.5692544281482697"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.5692544281482697"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.5692544281482697"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.5692544281482697"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.5692544281482697"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.5692544281482697"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.6647206246852875"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.6647206246852875"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.5685994625091553"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.5685994625091553"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.6647206246852875"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.6647206246852875"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.5685994625091553"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIVED('Alex', 'Maryland') ) | ~( KNOWS('Alex', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.5685994625091553"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'Maryland') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'California') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'California') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Dhanya') ) | ~( LIVED('Dhanya', 'Washington') )",
        "satisfaction": "0.7267982065677643"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.73619344830513"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.7222844362258911"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.4824480414390564"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.7609905153512955"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.7609905153512955"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.68154376745224"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.006952345371246338"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.006952345371246338"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Dhanya', 'California')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'California') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.7609905153512955"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.7609905153512955"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.7254167795181274"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.01954895257949829"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.86366406083107"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.793615847826004"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.006952345371246338"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Sabina') ) | ~( LIVED('Sabina', 'California') )",
        "satisfaction": "0.006952345371246338"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.006952345371246338"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Sabina') ) | ~( LIVED('Sabina', 'New York') )",
        "satisfaction": "0.006952345371246338"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Dhanya', 'Washington')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIVED('Dhanya', 'Washington') ) | ~( KNOWS('Dhanya', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7525678724050522"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6656470000743866"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6656470000743866"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Arti', 'California')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'California') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'California')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'California') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Steve', 'California')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'California') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6656470000743866"
    },
    {
        "source": "LIVED('Alex', 'Maryland')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Alex') ) | ~( LIVED('Alex', 'Maryland') )",
        "satisfaction": "0.6656470000743866"
    },
    {
        "source": "LIVED('Sabina', 'New York')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'New York') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Arti', 'Maryland')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'Maryland') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'Maryland')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Maryland') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'New York')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'New York') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Arti') ) | ~( LIVED('Arti', 'New York') )",
        "satisfaction": "0.4827308654785156"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Elena', 'Illinois')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Illinois') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Arti', 'New York')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Ben', 'Pennsylvania')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIVED('Arti', 'New York') ) | ~( KNOWS('Arti', 'Ben') ) | ~( LIVED('Ben', 'Pennsylvania') )",
        "satisfaction": "0.7655776590108871"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Ben', 'Washington')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Ben') ) | ~( LIVED('Ben', 'Washington') )",
        "satisfaction": "0.7895674109458923"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Elena', 'Maryland')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Elena') ) | ~( LIVED('Elena', 'Maryland') )",
        "satisfaction": "0.8921329379081726"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'Maryland')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Maryland') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'New Jersey')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'New Jersey') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Jay', 'Pennsylvania')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Jay') ) | ~( LIVED('Jay', 'Pennsylvania') )",
        "satisfaction": "0.712958037853241"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Steve', 'Maryland')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'Maryland') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Sabina', 'California')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIVED('Steve', 'New Jersey')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIVED('Sabina', 'California') ) | ~( KNOWS('Sabina', 'Steve') ) | ~( LIVED('Steve', 'New Jersey') )",
        "satisfaction": "0.7366964221000671"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "0.6735555231571198"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "0.6735555231571198"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "0.7454868257045746"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "0.7454868257045746"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "0.9164569303393364"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "0.9164569303393364"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.763435497879982"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "0.763435497879982"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "0.6735199689865112"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "0.6735199689865112"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.5489954054355621"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.5489954054355621"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "0.6021379828453064"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIKES('Elena', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "0.6021379828453064"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.8512797951698303"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.6753415763378143"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.6753415763378143"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "0.8818786293268204"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "0.8818786293268204"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.7022062838077545"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.7022062838077545"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "0.7461261749267578"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "0.7461261749267578"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.7844839692115784"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.7844839692115784"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.6868163645267487"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.6868163645267487"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "0.7474188804626465"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "0.7474188804626465"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.8511687517166138"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "0.8822212293744087"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "0.8822212293744087"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.8101822882890701"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.8101822882890701"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "0.7629587203264236"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIKES('Steve', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "0.7629587203264236"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.6880691647529602"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.6880691647529602"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.6754817068576813"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.6754817068576813"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.7339212894439697"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "0.7339212894439697"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7070260643959045"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "0.7070260643959045"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "0.8338052481412888"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "0.8338052481412888"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "0.8815638497471809"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "0.8815638497471809"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "0.9166966080665588"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "0.9166966080665588"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "0.999920480135188"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "0.999920480135188"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "0.9999035140499473"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIKES('Ben', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "0.9999035140499473"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "0.8319950699806213"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "0.8319950699806213"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.7387624680995941"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.7387624680995941"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "0.8221122920513153"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "0.8221122920513153"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "0.7644714117050171"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "0.7644714117050171"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "0.8819716572761536"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIKES('Alex', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "0.8819716572761536"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "0.9999883386672082"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "0.9999883386672082"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.7734305709600449"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.7734305709600449"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Sabina', 'Machine Learning') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "0.6016097962856293"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "0.6016097962856293"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.7336429059505463"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "0.7336429059505463"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "0.74649778008461"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "0.74649778008461"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.8105236738920212"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIKES('Arti', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.8105236738920212"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.7012811005115509"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.7012811005115509"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.7377029359340668"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.7377029359340668"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.7721723765134811"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.7721723765134811"
    },
    {
        "source": "LIKES('Elena', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.5506777763366699"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Elena', 'Machine Learning') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.5506777763366699"
    },
    {
        "source": "LIKES('Jay', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.7849065810441971"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Jay', 'Machine Learning') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.7849065810441971"
    },
    {
        "source": "LIKES('Steve', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "0.7632053196430206"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Steve', 'Machine Learning') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "0.7632053196430206"
    },
    {
        "source": "LIKES('Ben', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "0.7053667306900024"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Ben', 'Machine Learning') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "0.7053667306900024"
    },
    {
        "source": "LIKES('Alex', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "0.8227868974208832"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Alex', 'Machine Learning') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "0.8227868974208832"
    },
    {
        "source": "LIKES('Dhanya', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "0.9999878741264183"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Dhanya', 'Machine Learning') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "0.9999878741264183"
    },
    {
        "source": "LIKES('Arti', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIKES('Sabina', 'Machine Learning')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Machine Learning') ) | ~( LIKES('Arti', 'Machine Learning') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIKES('Steve', 'Skeeball')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Skeeball') ) | ~( LIKES('Steve', 'Skeeball') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.9655368477106094"
    },
    {
        "source": "LIKES('Jay', 'Skeeball')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Skeeball') ) | ~( LIKES('Steve', 'Skeeball') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.9655368477106094"
    },
    {
        "source": "LIKES('Jay', 'Skeeball')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Skeeball') ) | ~( LIKES('Jay', 'Skeeball') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.9654833823442459"
    },
    {
        "source": "LIKES('Steve', 'Skeeball')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Skeeball') ) | ~( LIKES('Jay', 'Skeeball') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.9654833823442459"
    },
    {
        "source": "LIKES('Ben', 'Skeeball')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIKES('Jay', 'Skeeball') ) | ~( LIKES('Ben', 'Skeeball') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.8632568418979645"
    },
    {
        "source": "LIKES('Jay', 'Skeeball')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIKES('Jay', 'Skeeball') ) | ~( LIKES('Ben', 'Skeeball') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "0.8632568418979645"
    },
    {
        "source": "LIKES('Ben', 'Skeeball')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Skeeball') ) | ~( LIKES('Ben', 'Skeeball') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.6868163645267487"
    },
    {
        "source": "LIKES('Steve', 'Skeeball')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Skeeball') ) | ~( LIKES('Ben', 'Skeeball') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.6868163645267487"
    },
    {
        "source": "LIKES('Steve', 'Skeeball')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Skeeball') ) | ~( LIKES('Steve', 'Skeeball') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.6880691647529602"
    },
    {
        "source": "LIKES('Ben', 'Skeeball')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Skeeball') ) | ~( LIKES('Steve', 'Skeeball') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.6880691647529602"
    },
    {
        "source": "LIKES('Jay', 'Skeeball')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIKES('Ben', 'Skeeball') ) | ~( LIKES('Jay', 'Skeeball') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.8633477836847305"
    },
    {
        "source": "LIKES('Ben', 'Skeeball')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIKES('Ben', 'Skeeball') ) | ~( LIKES('Jay', 'Skeeball') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "0.8633477836847305"
    },
    {
        "source": "LIKES('Steve', 'Trivia')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Trivia') ) | ~( LIKES('Steve', 'Trivia') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.9655368477106094"
    },
    {
        "source": "LIKES('Jay', 'Trivia')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Trivia') ) | ~( LIKES('Steve', 'Trivia') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "0.9655368477106094"
    },
    {
        "source": "LIKES('Jay', 'Trivia')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Trivia') ) | ~( LIKES('Jay', 'Trivia') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.9654833823442459"
    },
    {
        "source": "LIKES('Steve', 'Trivia')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Trivia') ) | ~( LIKES('Jay', 'Trivia') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "0.9654833823442459"
    },
    {
        "source": "LIKES('Sabina', 'Trivia')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Trivia') ) | ~( LIKES('Sabina', 'Trivia') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.9958736002445221"
    },
    {
        "source": "LIKES('Jay', 'Trivia')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Trivia') ) | ~( LIKES('Sabina', 'Trivia') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.9958736002445221"
    },
    {
        "source": "LIKES('Sabina', 'Trivia')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIKES('Steve', 'Trivia') ) | ~( LIKES('Sabina', 'Trivia') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Trivia')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIKES('Steve', 'Trivia') ) | ~( LIKES('Sabina', 'Trivia') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Trivia')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Trivia') ) | ~( LIKES('Steve', 'Trivia') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Trivia')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Trivia') ) | ~( LIKES('Steve', 'Trivia') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Sports')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Sports') ) | ~( LIKES('Ben', 'Sports') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.8706676661968231"
    },
    {
        "source": "LIKES('Steve', 'Sports')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Sports') ) | ~( LIKES('Ben', 'Sports') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "0.8706676661968231"
    },
    {
        "source": "LIKES('Jay', 'Trivia')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Trivia') ) | ~( LIKES('Jay', 'Trivia') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.9959318973124027"
    },
    {
        "source": "LIKES('Sabina', 'Trivia')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Trivia') ) | ~( LIKES('Jay', 'Trivia') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.9959318973124027"
    },
    {
        "source": "LIKES('Steve', 'Sports')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Sports') ) | ~( LIKES('Steve', 'Sports') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.8714722841978073"
    },
    {
        "source": "LIKES('Ben', 'Sports')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Sports') ) | ~( LIKES('Steve', 'Sports') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "0.8714722841978073"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "0.8221122920513153"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Sabina', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Alex')",
        "satisfaction": "0.8221122920513153"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "0.8815638497471809"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Jay', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Alex')",
        "satisfaction": "0.8815638497471809"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9876536671072245"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Alex')",
        "satisfaction": "0.9876536671072245"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Steve', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "0.8818786293268204"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Alex', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Jay')",
        "satisfaction": "0.8818786293268204"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Ben', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Elena', 'Alex')",
        "rule": "~( LIKES('Alex', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Alex')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Arti', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Jay')",
        "satisfaction": "0.7762589454650879"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.9787701088935137"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "0.9787701088935137"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.7844839692115784"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.7844839692115784"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Steve', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Ben', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Elena', 'Jay')",
        "rule": "~( LIKES('Jay', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "0.8227868974208832"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Alex', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Sabina')",
        "satisfaction": "0.8227868974208832"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.7849065810441971"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.7849065810441971"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "0.9924977445043623"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Steve', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Sabina')",
        "satisfaction": "0.9924977445043623"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.9950558003038168"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Elena', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Sabina')",
        "satisfaction": "0.9950558003038168"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Ben', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "0.9999883386672082"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Alex', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Arti')",
        "satisfaction": "0.9999883386672082"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Jay', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Arti')",
        "satisfaction": "0.7767742574214935"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.9942250456660986"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Arti')",
        "satisfaction": "0.9942250456660986"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.9987546998308972"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Steve', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Arti')",
        "satisfaction": "0.9987546998308972"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.987422501668334"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Alex', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Dhanya')",
        "satisfaction": "0.987422501668334"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Elena', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Ben', 'Arti')",
        "rule": "~( LIKES('Arti', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Arti')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.9785225465893745"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "0.9785225465893745"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.9940227083861828"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Arti', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Dhanya')",
        "satisfaction": "0.9940227083861828"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Elena', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Alex', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Jay', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.9987268826225773"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Arti', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Steve')",
        "satisfaction": "0.9987268826225773"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "0.9924537972547114"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Sabina', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Steve')",
        "satisfaction": "0.9924537972547114"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Elena', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Alex', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Veggies') ) | ~( LIKES('Ben', 'Veggies') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.9948779130354524"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Sabina', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Elena')",
        "satisfaction": "0.9948779130354524"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Jay', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Arti', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Steve', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Elena')",
        "rule": "~( LIKES('Elena', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Elena')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Alex', 'Veggies')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Alex', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Alex', 'Veggies') ) | KNOWS('Alex', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Veggies')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Jay', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Jay', 'Veggies') ) | KNOWS('Jay', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Veggies')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Sabina', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Sabina', 'Veggies') ) | KNOWS('Sabina', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Dhanya', 'Veggies') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Veggies')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Steve', 'Veggies') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Veggies')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Arti', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Arti', 'Veggies') ) | KNOWS('Arti', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Elena', 'Veggies')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Veggies')",
        "target": "KNOWS('Elena', 'Ben')",
        "rule": "~( LIKES('Ben', 'Veggies') ) | ~( LIKES('Elena', 'Veggies') ) | KNOWS('Elena', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Climbing')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Climbing') ) | ~( LIKES('Sabina', 'Climbing') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.930178813636303"
    },
    {
        "source": "LIKES('Jay', 'Climbing')",
        "target": "KNOWS('Sabina', 'Jay')",
        "rule": "~( LIKES('Jay', 'Climbing') ) | ~( LIKES('Sabina', 'Climbing') ) | KNOWS('Sabina', 'Jay')",
        "satisfaction": "0.930178813636303"
    },
    {
        "source": "LIKES('Dhanya', 'Climbing')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIKES('Jay', 'Climbing') ) | ~( LIKES('Dhanya', 'Climbing') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Climbing')",
        "target": "KNOWS('Dhanya', 'Jay')",
        "rule": "~( LIKES('Jay', 'Climbing') ) | ~( LIKES('Dhanya', 'Climbing') ) | KNOWS('Dhanya', 'Jay')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Climbing')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Climbing') ) | ~( LIKES('Jay', 'Climbing') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.9304192662239075"
    },
    {
        "source": "LIKES('Sabina', 'Climbing')",
        "target": "KNOWS('Jay', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Climbing') ) | ~( LIKES('Jay', 'Climbing') ) | KNOWS('Jay', 'Sabina')",
        "satisfaction": "0.9304192662239075"
    },
    {
        "source": "LIKES('Dhanya', 'Climbing')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Climbing') ) | ~( LIKES('Dhanya', 'Climbing') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Climbing')",
        "target": "KNOWS('Dhanya', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Climbing') ) | ~( LIKES('Dhanya', 'Climbing') ) | KNOWS('Dhanya', 'Sabina')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Jay', 'Climbing')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Climbing') ) | ~( LIKES('Jay', 'Climbing') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Climbing')",
        "target": "KNOWS('Jay', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Climbing') ) | ~( LIKES('Jay', 'Climbing') ) | KNOWS('Jay', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Sabina', 'Education')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIKES('Arti', 'Education') ) | ~( LIKES('Sabina', 'Education') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIKES('Arti', 'Education')",
        "target": "KNOWS('Sabina', 'Arti')",
        "rule": "~( LIKES('Arti', 'Education') ) | ~( LIKES('Sabina', 'Education') ) | KNOWS('Sabina', 'Arti')",
        "satisfaction": "0.9211593717336655"
    },
    {
        "source": "LIKES('Dhanya', 'Hiking')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIKES('Ben', 'Hiking') ) | ~( LIKES('Dhanya', 'Hiking') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Hiking')",
        "target": "KNOWS('Dhanya', 'Ben')",
        "rule": "~( LIKES('Ben', 'Hiking') ) | ~( LIKES('Dhanya', 'Hiking') ) | KNOWS('Dhanya', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Arti', 'Education')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Education') ) | ~( LIKES('Arti', 'Education') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIKES('Sabina', 'Education')",
        "target": "KNOWS('Arti', 'Sabina')",
        "rule": "~( LIKES('Sabina', 'Education') ) | ~( LIKES('Arti', 'Education') ) | KNOWS('Arti', 'Sabina')",
        "satisfaction": "0.9212697222828865"
    },
    {
        "source": "LIKES('Steve', 'Hiking')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Hiking') ) | ~( LIKES('Steve', 'Hiking') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Hiking')",
        "target": "KNOWS('Steve', 'Ben')",
        "rule": "~( LIKES('Ben', 'Hiking') ) | ~( LIKES('Steve', 'Hiking') ) | KNOWS('Steve', 'Ben')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Hiking')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Hiking') ) | ~( LIKES('Steve', 'Hiking') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Hiking')",
        "target": "KNOWS('Steve', 'Dhanya')",
        "rule": "~( LIKES('Dhanya', 'Hiking') ) | ~( LIKES('Steve', 'Hiking') ) | KNOWS('Steve', 'Dhanya')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Ben', 'Hiking')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Hiking') ) | ~( LIKES('Ben', 'Hiking') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Hiking')",
        "target": "KNOWS('Ben', 'Steve')",
        "rule": "~( LIKES('Steve', 'Hiking') ) | ~( LIKES('Ben', 'Hiking') ) | KNOWS('Ben', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Dhanya', 'Hiking')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIKES('Steve', 'Hiking') ) | ~( LIKES('Dhanya', 'Hiking') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    },
    {
        "source": "LIKES('Steve', 'Hiking')",
        "target": "KNOWS('Dhanya', 'Steve')",
        "rule": "~( LIKES('Steve', 'Hiking') ) | ~( LIKES('Dhanya', 'Hiking') ) | KNOWS('Dhanya', 'Steve')",
        "satisfaction": "1.0"
    }
]